# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

@des = User.new(name: "Desiree", username:"lynxcatdes", email: 'desiree.dewysocki@gmail.com', password: 'descatlynx', password_confirmation: 'descatlynx') 
@des.save
trivia_tuesday = Network.create!(
    name: "Trivia Tuesday Squad",
    network_type: "Friends",
    description: "Best trivia team out there!",
    user: @des 
  )
  
  trivia_tuesday.people.create(name: "Emma", relation: "friend", virtual_interaction: 1.day.ago , irl_interaction: 2.days.ago)
  trivia_tuesday.people.create(name: "Patrick", relation: "friend", virtual_interaction: 1.day.ago , irl_interaction: 2.days.ago)
  trivia_tuesday.people.create(name: "Ben", relation: "friend", virtual_interaction: 1.day.ago , irl_interaction: 2.days.ago)

  barcade = Network.create!(
    name: "Barcade Squad",
    network_type: "Friends",
    description: "Work hard, play hard",
    user: @des 
  )
  barcade.people.create(name: "Bart", relation: "friend", virtual_interaction: 6.day.ago , irl_interaction: 1.day.ago)
  barcade.people.create(name: "Corey", relation: "friend", virtual_interaction: 6.day.ago , irl_interaction: 1.day.ago)
  barcade.people.create(name: "Amy", relation: "friend", virtual_interaction: 6.day.ago , irl_interaction: 1.day.ago)
