class CreateUrls < ActiveRecord::Migration[7.0]
  def change
    create_table :urls do |t|
      t.string :unique_hash
      t.text :original_url
      t.timestamps
    end
  end
end
