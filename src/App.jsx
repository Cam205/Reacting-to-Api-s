import React, { Component } from 'react';
import Card from './Card';
import People from './People';






class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .then(() => {
                fetch('https://ghibliapi.herokuapp.com/people')
                    .then(peop => peop.json())
                    .then(people => this.setState({ people }))
            })

    }


    handleFilms() {
        this.setState({
            loadFilms: true,
            loadPeople: false
        })
    }

    handlePeople() {
        this.setState({
            loadPeople: true,
            loadFilms: false
        })
    }

    reset() {
        this.setState({
            loadFilms: false,
            loadPeople: false
        })
    }


    render() {
        if (!this.state.loadFilms && !this.state.loadPeople) {
            return (
                <>
                   
                    <div className="row p-3">
                        <button className="btn btn-outline-info" onClick={(e => this.handleFilms(e))}>Load Films</button>
                    </div>
                    <div className="row p-3">
                        <button className="btn btn-outline-info" onClick={(e => this.handlePeople(e))}>Load People</button>
                    </div>
                </>
            )
        } else if (this.state.loadPeople && !this.state.loadFilms) {
            return (
                <> 
                {this.state.people.map(people => {
                    return <People key={people.id} people={people} />
                })}
                    <button className="btn btn-outline-info" onClick={(e) => this.reset(e)}>Back</button>

                </>
            );
        } else if (!this.state.loadPeople && this.state.loadFilms) {
            return (
                <>
                    {this.state.films.map(film => {
                        return <Card key={film.id} film={film} />
                    })}
                        <button className="btn btn-outline-info" onClick={(e) => this.reset(e)}>Back</button>

                </>
            
            );
        }

    }
}


export default App;