import React from "react"

type Embed = {
  ["city:search-results"]:CitySearch[];
}
type CitySearch = {
  _links: Item;
  matching_alternate_names: Alternate[];
  matching_full_name: string;
}
  type Item = {
    ["city:item"]: Href;
  }
  type Href = {
    href: string;
  }
type Alternate = {
  name: string;
}
  type Link = {
    curies: Curie[];
    self: Self; 
  }
    type Curie = {
      href: string;
      name: string;
      templated: boolean
    }
    type Self = {
      href: string;
    }

  type Option = {
      _embedded: Embed,
      _links: Link,
      count: number
      }

let options: Option[]

const onlyFullNames = (options: Option[]): string[] => {

}

