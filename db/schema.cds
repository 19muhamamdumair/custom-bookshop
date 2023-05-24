using { Currency, managed, sap,cuid } from '@sap/cds/common';
// namespace sap.capire.bookshop;
namespace my.bookshop;

@assert.unique.name:[title]

entity Books :managed  {
  key ID : String(33);
  title  : localized String(111);
  stock: Integer; 
  author: Association to Authors;
  // descr  : localized String(1111);
  // author : Association to Authors;
  // genre  : Association to Genres;
  // stock  : Integer;
  // price  : Decimal(9,2);
  // currency : Currency;
}

entity Authors  {
  key ID : Integer;
  name   : String(111);
  books  : Association to many Books on books.author = $self;
}

entity Orders: cuid,managed {
  book: Association to Books;
  quantity:  Integer
}

/** Hierarchically organized Code List for Genres */
// entity Genres : sap.common.CodeList {
//   key ID   : Integer;
//   parent   : Association to Genres;
//   children : Composition of many Genres on children.parent = $self;
// }


entity Cart {
  key ID:UUID;
  book_id: Integer;
  title: String(111);
  quantity: Integer;
  amount: Decimal;

}