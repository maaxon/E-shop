import {gql} from "@apollo/client";

export const GET_Product_By_ID=gql`
query product($id:String!){
  product(id:$id){
   id
   name
    brand
    gallery
    description
    inStock
    prices{
      amount
      currency{
        symbol
      }
    }
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
  }
    
  }
}

`