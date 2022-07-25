import {gql} from "@apollo/client";

export const GET_Product_By_ID=gql`
query product($id:String!){
  product(id:$id){
   name
    brand
    gallery
    description
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
      
        value
        id
      }
  }
    
  }
}

`