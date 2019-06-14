SpotSearch.destroy_all
Address.destroy_all
User.destroy_all
Spot.destroy_all

puts "User seed creation"
User.create!(
  email: "test@pawkeo.com",
  password: 'testpawkeo',
  password_confirmation: 'testpawkeo',
  first_name: 'Robot',
  last_name: 'Droid'
)

User.create!(
  email: "myriam@pawkeo.com",
  password: '123456',
  password_confirmation: '123456',
  first_name: 'Myriam',
  last_name: 'Chahlafi'
)

# puts "SpotSearch seed creation"
# SpotSearch.create!(
#   start_time: Date.new,
#   orig_lat: 48.8649,
#   orig_lng: 2.3800699999999324,
#   dest_lat: 47.9999,
#   dest_lng: 2.3800699999999324,
#   user_id: User.last[:id],
# )


# puts "100 Spots seeds creation"
# 100.times do
#   puts "Spot created!"
#   genlat = 48.85 + rand(0.0..0.03)
#   genlng = 2.34 + rand(0.0..0.05)
# Spot.create!(
#   lng: genlng,
#   lat: genlat,
# )

seedadresses = [
"20 Rue Etienne Dolet, Paris, France",
"20 Rue Deguerry, Paris, France",
"2 rue Ternaux",
"1 Cité Ribot, Paris, France",
"10 Avenue Jean Aicard, Paris, France",
"10 Rue Edouard Lockroy, Paris, France",
"10 Rue Neuve Popincourt, Paris, France",
"5 Rue des Bluets, Paris, France",
"5 Rue de Nemours, Paris, France",
"24 Rue de la Folie Méricourt, Paris, France",
"50 Rue Saint-Sébastien, Paris, France",
"50 Rue du Grand Prieuré, Paris, France",
"3 Passage Saint-Pierre Amelot, Paris, France",
"10 Rue Jules Verne, Paris, France",
"4 Rue Bisson, Paris, France",
"20 Rue Ramponeau, Paris, France",
"50 Rue Morand, Paris, France",
"Rue Louis Bonnet, Paris, France",
"50 Rue Saint-Ambroise, Paris, France",
"5 Rue Lechevin, Paris, France",
"109 Rue Auberkampf, Paris, France"
]

seedadresses.each_with_index do |address, index|
  puts "Spot number #{index + 1}"
  results = Geocoder.search(address)
  search_coordinates = results.first.coordinates
  Spot.create!(
    lng: search_coordinates.last,
    lat: search_coordinates.first,
  )
end
