-- Tables myTable
--Col=> X Y

-- Select

>SELECT X from myTable
>SELECT Y from myTable
-- 
>SELECT X,Y from myTable
>SELECT * from myTable   
--  we can then use the asterisk (*)


SELECT * from Movies
Q1:
SELECT Title FROM Movies;

Q2:
SELECT Director FROM Movies;

Q3:
SELECT Title,Director FROM Movies;

Q4:
SELECT Title,Year FROM Movies;

Q5:
SELECT * FROM Movies;


-- Exercise 2 — Tasks

-- Select query with constraints


-- SELECT column, another_column
-- FROM mytable
-- WHERE condition
--     AND/OR another_condition
--     AND/OR …;

Q1:
SELECT Title FROM movies where id =6;

Q2:
SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010;

Q3:
SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010;

Q4:
SELECT * FROM movies WHERE Id <6;
SELECT * FROM movies WHERE Year Id 1 AND 5;

Tasks 3:
Q1:
SELECT * FROM movies WHERE Title LIKE "%Toy Story%";

Q2:
SELECT * FROM movies WHERE Director LIKE "%john Lasseter%";

Q3:
SELECT * FROM movies WHERE Director NOT LIKE "%john Lasseter%";

Q4:
SELECT * FROM movies WHERE Title LIKE "%WALL-%";


Exercise:
Q1:
SELECT DISTINCT Director FROM movies ORDER BY Director ASC;

Q2:
SELECT * FROM movies ORDER BY Year DESC LIMIT 4;

Q3:
SELECT * FROM movies ORDER BY Title ASC LIMIT 5;

Q4:
SELECT * FROM movies ORDER BY Title ASC LIMIT 5 OFFSET 5;

Review :
Q1:
SELECT City,Population FROM north_american_cities where Country="Canada";

Q2:
SELECT City FROM north_american_cities where Country="United States" Order by Latitude desc;

Q3:
SELECT City FROM north_american_cities where longitude <-87.629798 Order by longitude ;

Q4:
SELECT City,Population FROM north_american_cities where Country="Mexico"
Order by Population desc LIMIT 2;

Q5:
SELECT City,Population FROM north_american_cities where Country="United States" Order by Population desc LIMIT 2 OFFSET 2 ;

https://sqlbolt.com/lesson/select_queries_with_joins


-- Joins:
-- SELECT column, another_table_column, …
-- FROM mytable
-- INNER JOIN another_table 
--     ON mytable.id = another_table.id
-- WHERE condition(s)
-- ORDER BY column, … ASC/DESC
-- LIMIT num_limit OFFSET num_offset;

-- SELECT Title,Rating FROM movies INNER JOIN Boxoffice ON movies.Id = Boxoffice.Movie_id;

-- Exercise 6 — Tasks

Q1:
SELECT Title,Domestic_sales,International_sales FROM movies INNER JOIN Boxoffice ON movies.Id = Boxoffice.Movie_id;

Q2:
SELECT Title,Domestic_sales,International_sales FROM movies INNER JOIN Boxoffice ON movies.Id = Boxoffice.Movie_id WHERE International_sales>Domestic_sales;

Q3:
SELECT Title FROM movies INNER JOIN Boxoffice ON movies.Id = Boxoffice.Movie_id ORDER BY Rating DESC;



-- LEFT Join
-- 
SELECT * FROM Buildings LEFT JOIN Employees ON Buildings.Building_name = Employees.Building;

Q1:
SELECT DISTINCT Building from Employees;

Q2:
SELECT * from Buildings

Q3:
SELECT DISTINCT Building_name,role FROM Buildings LEFT JOIN Employees ON Buildings.Building_name = Employees.Building;

-- Exercise 8 — Tasks

Q1:
SELECT Name,Role FROM employees WHERE Building is null;

Q2:
SELECT DISTINCT Building_name,role FROM Buildings LEFT JOIN Employees ON Buildings.Building_name = Employees.Building
WHERE Employees.Building IS NULL;

-- 
Exercise 9 — Tasks

Q1:
SELECT Title,(Domestic_sales+International_sales)/1000000 AS combined_Sales FROM movies INNER JOIN Boxoffice ON movies.Id = Boxoffice.Movie_id;

Q2:

SELECT Title,(rating*10) AS Rating_Percent FROM movies INNER JOIN Boxoffice ON movies.Id = Boxoffice.Movie_id;

Q3:
SELECT Title FROM movies WHERE Year % 2 = 0;
























