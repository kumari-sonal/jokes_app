

-- Create the jokes table to store all jokes (optional if you want to store search results)
CREATE TABLE IF NOT EXISTS jokes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    joke_id VARCHAR(255) NOT NULL,
    joke_text TEXT NOT NULL,
    image_url VARCHAR(255),
    is_favourite BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the favourites table to store only favourited jokes
CREATE TABLE IF NOT EXISTS favourites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    joke_id VARCHAR(255) NOT NULL,
    joke_text TEXT NOT NULL,
    image_url VARCHAR(255),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on joke_id to improve query performance
CREATE INDEX idx_joke_id ON favourites (joke_id);
