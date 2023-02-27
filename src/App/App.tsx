import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import { 
  getUrbanAreas,
  getFullName,
} from '../apicalls/allCitiesApiCall';
import { Route , NavLink, Switch } from 'react-router-dom'; 
import Card from '../Card/Card'

type MyState = {
  urbanAreas: [],
  homeSlug: string,
  desiredSlug: string,
}

class App extends Component<{}, MyState> {
  state: MyState = {
    urbanAreas: [],
    homeSlug: '',
    desiredSlug: '',
  }

  componentDidMount(): void {
    const urbanData: any = [];
    getUrbanAreas()
      .then(data => {
        data['_links']['ua:item'].forEach((city: {href: string, name: string}) => {
          getFullName(city.href)
          .then(data => {
            const obj: {[key: string]: string} = {}

            obj.href = city.href
            obj.fullName = data['full_name']
            obj.slug = data['slug']
            urbanData.push(obj)
            this.setState({ urbanAreas: urbanData})
          })
        })
      })
  }

  render() {
    return (
      <main className='app'>
        <Header />

        <Switch>
        <Route exact path='/' render ={ () => <Form urbanAreas={this.state.urbanAreas} /> } /> 

        <Route exact path={`/:slugs`} render={({ match })=> {
          let slugString: string = match.params.slugs
          const slugs: string[] = slugString.split("+")

          return(
            <div className='display-area'>
              <div className='cards-container'>
                <Card 
                  citySlug={slugs[0]}
                />
                <Card 
                  citySlug={slugs[1]}
                />
              </div>
              <div>
                <NavLink to='/'>
                  <button className='home-btn'> Home </button>
                </NavLink> 
              </div>
            </div>
          )
        }}/>
        </Switch>
      </main>
    )
  }
}

export default App;
