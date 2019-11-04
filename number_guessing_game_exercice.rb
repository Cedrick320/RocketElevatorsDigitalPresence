require 'httparty'
response = HTTParty.get('http://example.com')

require 'net/http'

def play_game(difficulty)
	
	case difficulty
		when "veryeasy"
			limit = 10
			max_nb_tries = 1000000
		when "easy"
			limit = 10
			max_nb_tries = 5
		when "medium"
			limit = 100
			max_nb_tries = 5
		when "hard"
			limit = 500
			max_nb_tries = 8
		when "veryhard"
			limit = 1000
			max_nb_tries = 9
	end
	results = new_game(limit, max_nb_tries)
end

def new_game(limit, max_nb_tries)
	good_number = rand(1..limit)
	puts "I've now chosen a new number between 1 and #{limit}."
	return {
		"answer_found" => start_guessing(good_number, max_nb_tries),
		"good_number" => good_number
	}	
end

def start_guessing(good_number, max_nb_tries)
	guess = 0
	nb_tries = 0
	answer_found = false
	puts "You can start guessing."
	while nb_tries < max_nb_tries
		if guess.to_i != good_number
			guess = gets.chomp
			if  guess.empty? || !(guess.scan(/\D/).empty?)
				puts "Invalid input"
			else
				nb_tries += 1
                unless nb_tries == max_nb_tries
                    if max_nb_tries == 1000000
                        puts "Higher! " if guess.to_i < good_number                   
                        puts "Lower! " if guess.to_i > good_number
                    else    
                        print "Higher! " if guess.to_i < good_number                   
                        print "Lower! " if guess.to_i > good_number
                        max_nb_tries - nb_tries == 1 ? (puts "1 try left") : (puts "#{max_nb_tries - nb_tries} tries left") unless (max_nb_tries == 1000000 || guess.to_i == good_number)
                    end
				end
			end	
		else
			break
		end		
	end
	answer_found = true unless guess.to_i != good_number
end

def main_game
	response = Net::HTTP.get_response('http://artii.herokuapp.com/', '/make?text=Number Guessing Game')

	difficulties = %w(veryeasy easy medium hard veryhard)
    congrats = ["Well done!", "Good job!", "Incredible! You found it!", "You're awesome!", "What a genius!", "Brilliant!", "Well played!"]
	puts response.body
	puts "Hello, please enter your name."
	name = gets.chomp
	puts "Hi #{name}!"
	puts "Welcome to this fabulous number guessing game."
	continue_playing = true
	while continue_playing
		puts "Please choose a difficulty level (VeryEasy / Easy / Medium / Hard / VeryHard)"
		difficulty = gets.chomp.gsub(/\s+/, "").downcase
		if  !(difficulties.include?(difficulty))
			puts "Invalid input"
		else
			results = play_game(difficulty)
			results["answer_found"] ? (puts congrats.sample) : (puts "You're out of tries! The number we were looking for was #{results["good_number"]}")
			puts "Wanna play again? (Yes/No)"
			answer = gets.chomp.downcase
			continue_playing = false if answer == "no"
		end			
	end
	response = "Thank you for playing!"
	puts response.body
end



main_game