import {gql} from "@apollo/client"

export const GET_ALL_Categories=gql`
    query{
        categories{
            name
        }
    }

`

export const GET_Products_By_Category=gql`
  query   category($input: CategoryInput) {
  category(input:$input){
    products{
      id
      name
      brand
      gallery
      inStock
      prices{
        amount
        currency{
          symbol
        }
      }
    }
  }
}

`