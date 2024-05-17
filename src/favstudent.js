
import React, { useState } from 'react';

const FavouriteStudentList = () => 
{
    const [students,setStudents] = useState([
        '1. Bharath',
        '2. Praveen',
        '3. Kumar',
        '4. Ramya',
        '5. Monica'
    ]);

    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (student) => {
        setFavourites([...favourites, student]);
        setStudents(students.filter(s => s !== student));
    };
    
    const removeFromFavourites = (student) => {
        setStudents([...students, student]);
        setFavourites(favourites.filter(f => f !== student));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h2>List of Students</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {students.map((student, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        {student}
                        <button 
                            style={{ marginLeft: '10px' }} 
                            onClick={() => addToFavourites(student)}
                        >
                            Add to Favourite
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Favourite Students</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {favourites.map((favourite, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        {favourite}
                        <button 
                            style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }} 
                            onClick={() => removeFromFavourites(favourite)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouriteStudentList;
