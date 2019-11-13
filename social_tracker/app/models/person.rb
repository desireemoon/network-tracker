class Person < ApplicationRecord
    has_and_belongs_to_many :networks
    has_one_attached :picture
end
