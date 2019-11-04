class GmapsController 
    
    def location
      @pins= []
    #   buildings = Building.all
    
      Building.all.each do |b|
        adress = b.adress
        customer = b.customer.company_name
        batteries = b.batteries.count
        bat_ids = b.battery_ids
        columns = Column.where(battery_id: bat_ids).count
        col_ids = Column.where(battery_id: b.battery_ids).ids
        elevators = Elevator.where(column_id: col_ids).count
        contact = b.customer.enterprise_contact_full_name
        nb_floors = Column.find_by_id(col_ids).number_served_floor
        #type = Battery.find_by_id(bat_ids).building_type
        p b.adress
        
        if b.adress != nil
          if b.adress.latitude == nil || b.adress.longitude == nil
            #Find lat/lng to add to db
            @add = adress.number_and_street_name + " " + adress.city + " " + adress.zipcode
       
            pp @add
            @response = JSON.parse(Faraday.get("https://maps.googleapis.com/maps/api/geocode/json?adress=#{@add}&key=}").body)
            pp @response
            #get the info and save them in db
            b.adress.latitude = @response["results"][0]["geometry"]["location"]["lat"]
            b.adress.longitude = @response["results"][0]["geometry"]["location"]["lng"]
            adress.save!
          end
​
          @pins << {adress: b.adress.number_and_street_name,
                    customer: customer,
                    contact: contact,
                    lat: b.adress.latitude,
                    lng: b.adress.longitude,
                    batteries: batteries,
                    columns: columns,
                    elevators: elevators,
                    nb_floors: nb_floors,
                    #type: type
                  }
        end
      end
    end
    # GET /gmaps
    # GET /gmaps.json
    def index
      @gmap = Gmap.all
    end
    # GET /gmaps/1
    # GET /gmaps/1.json
    def show
    end
    # GET /gmaps/new
    def new
      @gmap = Gmap.new
    end
    # GET /gmaps/1/edit
    def edit
    end
    # POST /gmaps
    # POST /gmaps.json
    def create
      @gmap = Gmap.new(gmap_params)
      respond_to do |format|
        if @gmap.save
          format.html { redirect_to @gmap, notice: 'Gmap was successfully created.' }
          format.json { render :show, status: :created, location: @gmap }
        else
          format.html { render :new }
          format.json { render json: @gmap.errors, status: :unprocessable_entity }
        end
      end
    end
    # PATCH/PUT /gmaps/1
    # PATCH/PUT /gmaps/1.json
    def update
      respond_to do |format|
        if @gmap.update(gmap_params)
          format.html { redirect_to @gmap, notice: 'Gmap was successfully updated.' }
          format.json { render :show, status: :ok, location: @gmap }
        else
          format.html { render :edit }
          format.json { render json: @gmap.errors, status: :unprocessable_entity }
        end
      end
    end
    # DELETE /gmaps/1
    # DELETE /gmaps/1.json
    def destroy
      @gmap.destroy
      respond_to do |format|
        format.html { redirect_to gmaps_url, notice: 'Gmap was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_gmap
        @gmap = Gmap.find(params[:id])
      end
      # Never trust parameters from the scary internet, only allow the white list through.
      def gmap_params
        params.fetch(:gmap, {})
      end
end




