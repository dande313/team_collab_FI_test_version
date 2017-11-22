User.create ([
			{ email: 'dande313@aol.com', password: 'abc123', admin: true},
			{ email: 'test@aol.com', password: 'abc123', admin: false}
	])

user_emails = ["dande313@aol.com", "Neil.Tyson@nasa.gov", "Sally.Brown@hotmail.net", "Thomas.Hobbs@aol.net", "Russian.Bride1@ruskie.ru", "Bill.T.Catt@bloomcounty.com", "Davey.Wreden@gmail.net",
"Rainbow.Dash@celete.org", "nietzsche@Apollo.net", "Alan.Watts@purposeoflife.com", "Eleanor.Shellstrop@goodplace.org", "Daniel.Dankovskiy@utopia.net"]

assistance_needs = [true, false]

projects = [{title: "Tower of hanoi", repo_url: "https://github.com/dande313/Hanoi_v3"}, {title: "Science Journal", repo_url: "https://github.com/dande313/university-science-journal-V2"},
{title: "Trivia Game", repo_url: "https://github.com/dande313/React_Trivia_Game"}, {title: "Art Collection", repo_url: "https://github.com/dande313/Art-Collection"},
{title: "Top BoardGames Ruby CLI", repo_url: "https://github.com/dande313/top_boardgames_ruby_cli"}, {title: "Tic-tac-toe Rails API", repo_url: "https://github.com/dande313/js-tictactoe-rails-api-v-000"}]

infos = ["Completed AI, need to transfer from CLI to Heroku", "Article show pages navigate using JQuery, but have difficulty when an article is deleted.", "Having difficulty getting disks to render correctly when displaying more than 40. Want to get up to 64.",
 "Moving from Sinatra to Rails", "Troubleshooting API connection.", "Moving from Sinatra to Rails", "Adding copyright complaint submission form", "Trouble getting answer box to automatically submit when timer runs out",
 "Fixed Redirect issue on create new", "PLAY link troubleshooting", "Wondering if we can get JSON to naturally ramify in application...", "Adding JQuery render of questions", "Putting AI into box...", "AI attempting to escape the box.",
 "Working in tidying up project with some sweet CSS", "Compiling...", "Adding option to add Department.", "Adding links for creating topics.", "Working on Alert when game is on sale", "Attempting to select 10 random trivia questions, when user hits PLAY"]

70.times do 
	project_info = projects.sample
	new_report = Report.create(title: project_info[:title], repo_url: project_info[:repo_url], user_email: user_emails.sample, info: infos.sample, assistance_needed: assistance_needs.sample)
end

