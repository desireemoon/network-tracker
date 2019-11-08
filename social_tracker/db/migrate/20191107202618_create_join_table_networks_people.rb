class CreateJoinTableNetworksPeople < ActiveRecord::Migration[6.0]
  def change
    create_join_table :networks, :people do |t|
      # t.index [:network_id, :person_id]
      # t.index [:person_id, :network_id]
    end
  end
end
