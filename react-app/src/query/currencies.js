import {gql} from "@apollo/client";

export const GET_Currencies=gql`
    query{
        currencies{
            label
            symbol
        }
    }

`