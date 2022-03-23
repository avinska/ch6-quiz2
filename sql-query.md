1. Buat sebuah database dengan nama book_store
CREATE DATABASE book_store;

2. Pada database tersebut, buat sebuah table nama books dengan struktur seperti di soal. untuk mengecheck struktur tabel, kalian bisa gunakan perintah di bawah, baru hasil nya nanti di screenshot.
\d book_store;

CREATE TABLE books (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	author VARCHAR(50) NOT NULL,
	price INTEGER NOT NULL,
	is_published BOOLEAN DEFAULT FALSE
);

3. Masukan data seperti di soal
INSERT INTO BOOKS ( name, author, price, is_published) 
VALUES 
('The Intelligent Investor', 'Benjamin Graham', 175500, true), 
( 'Segala Galanya Amyar', 'Mark Manson', 111000, false),
('Rich Dad Poor Dad', 'Robert T. Kiyosaki', 54400, false),
('Novel Bulan', 'Tere Liye', 76000, true),
('You Do You', 'Fellexandro Ruby', 102400, true),
('Start with Why', 'Simon Sinek', 80000, false);

4. Tampilkan hanya column atau field name, author, price dari table books
SELECT name, author, price FROM books WHERE price >= 80000;


5. Tampilkan data dari tabel book, dimana harga/price buku tersebut lebih dari sama dengan 80000.
SELECT * FROM books WHERE price >= 80000;

6. Tampilkan data dari tabel book, dimana nama/name buku tersebut mengandung kata kata "Rich" pada kata di bagian depan.
SELECT * FROM books WHERE name LIKE 'Rich%';

7. Update data pada tabel books. Di update price nya menjadi 180000 dan is_publish nya menjadi true. Yang mana data tersebut memiliki author adalah "Simon Sinek".
UPDATE books 
SET price = 180000, is_published = true
WHERE author = 'Simon Sinek';

8. Hapus data pada table books, dimana book name nya adalah "Novel Bulan”.
DELETE FROM books WHERE name = 'Novel Bulan';

9. Tampilkan data dari tabel book, dengan urutan harga yang paling mahal terlebih dahulu ke yang paling murah.
SELECT * FROM books ORDER BY price DESC;

