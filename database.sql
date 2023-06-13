create table sample (
  id varchar(100) not null,
  name varchar(100) not null,
  primary key (id)
)engine innodb;

create table customers (
  id varchar(100) not null,
  name varchar(100) not null,
  email varchar(100) not null,
  phone varchar(100) not null,
  primary key (id),
  constraint customers_email_unique unique (email),
  constraint customers_phone_unique unique (phone)
)engine innodb;

create table products (
  id varchar(100) not null,
  name varchar(100) not null,
  price int not null,
  stock int not null,
  category varchar(100) not null,
  primary key (id)
)engine innodb;

insert into products (id, name, price, stock, category)
values ("P0001", "A", 1000, 100, "K1"),
("P0002", "B", 2000, 200, "K1"),
("P0003", "C", 3000, 300, "K1"),
("P0004", "D", 4000, 400, "K1"),
("P0005", "E", 5000, 500, "K1");

insert into products (id, name, price, stock, category)
values ("P0006", "A", 1000, 100, "K2"),
("P0007", "B", 2000, 200, "K2"),
("P0008", "C", 3000, 300, "K2"),
("P0009", "D", 4000, 400, "K2"),
("P00010", "E", 5000, 500, "K2");

create table categories (
  id int not null auto_increment,
  name varchar(100) not null,
  primary key (id)
) engine innodb;

create table wallet (
  id varchar(100) not null,
  balance int not null,
  customer_id varchar(100) not null,
  primary key (id),
  constraint wallet_customer_id_fk foreign key (customer_id) references customers (id),
  constraint wallet_customer_id_unique unique (customer_id)
) engine innodb;

create table comments (
  id int not null auto_increment,
  customer_id varchar(100) not null,
  title varchar(100) not null,
  description text,
  primary key (id),
  constraint comments_customer_id_fk foreign key (customer_id) references customers (id)
) engine innodb;

insert into comments (customer_id, title, description)
values
("2", "komen 1 dari feri", "sample komen 1 dari feri"),
("9", "komen 2 dari widya", "sample komen 2 dari widya"),
("9", "komen 3 dari widya", "sample komen 3 dari widya"),
("3", "komen 4 dari dandan", "sample komen 4 dari dandan");

create table likes
(
    customer_id varchar(100) not null,
    product_id  varchar(100) not null,
    primary key (customer_id, product_id),
    constraint likes_customer_id_fk foreign key (customer_id) references customers (id),
    constraint likes_product_id_fk foreign key (product_id) references products (id)
) engine innodb;

create table _loves
(
    A varchar(100) not null,
    B varchar(100) not null,
    primary key (A, B),
    constraint customer_loves_fk foreign key (A) references customers (id),
    constraint product_loves_fk foreign key (B) references products (id)
) engine innodb;
