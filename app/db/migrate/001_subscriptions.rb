class Subscriptions < ActiveRecord::Migration[6.0]
    def change
      create_table :subscriptions do |t|
        t.string :name
        t.string :link
        t.string :category
        t.integer :price
        t.integer :subscriber_id
    end 
  end 
end 