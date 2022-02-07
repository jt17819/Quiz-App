import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = ({ categories }) => {
    let navigate = useNavigate();

const handleSubmit = e => {
    e.preventDefault()


    const apiOptions = {
        players: e.target.players.value,
        category: e.target.category.value,
        difficulty: e.target.difficulty.value
    }

    navigate('/quiz');
    console.log(apiOptions)

    
}

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='players'>Players</label>
                <select id='players'
                >
                    <option  value='1'>1</option>
                    <option  value='2'>2</option>
                </select>

                <label htmlFor='category'>Category</label>
                <select id='category'
                >
                    {categories.map(category => (
                        <option value={category.id} key={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <label htmlFor='difficulty'>Difficulty</label>
                <select id='difficulty'
                >
                    <option value=''>Any Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
                <input type='submit' id='startQuiz' value='Start'/>

            </form>
        </div>
    )
};

export default Home;
