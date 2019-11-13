class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :relation
      t.date :virtual_interaction
      t.date :irl_interaction
      t.integer :phone
      t.string :email
      t.string :address
      t.text :notes

      t.timestamps
    end
  end
end
