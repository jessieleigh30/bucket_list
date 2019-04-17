class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.integer :total_challenges
      t.integer :complete_challenges

      t.timestamps
    end
  end
end
