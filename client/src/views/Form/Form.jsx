import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms} from '../../redux/actions';
import axios from 'axios';

import "./Form.css"


function Form() {
    const dispatch = useDispatch();
    const { allGenres } = useSelector((state) => state);
    const {allPlatforms} = useSelector((state)=>state)
    console.log(allPlatforms)
    const [form, setForm] = useState({
        name: "",
        background_image: "",
        description: "",
        platforms: [],
        released: "",
        rating: "",
        Descripción: "",
        genres: []
    });

    const [errors, setErrors] = useState({
        name: "",
        background_image: "",
        description: "",
        platforms: "",
        released: "",
        rating: "",
        Descripción: "",
        genre: ""
    });

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    useEffect(() => {
      dispatch(getPlatforms())
  }, [dispatch])

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        validate({...form,[property]: value})
        setForm({ ...form, [property]: value })
    };

   
        const validate = (form) => {
            let newErrors= {};
          
            // Name validation
            if (!form.name.trim()) {
              newErrors.name = "Name is required";
            } else if (form.name.length < 2 || form.name.length > 50) {
              newErrors.name = "Name must be between 2 and 50 characters";
            }
          
            // Background image validation
            if (!form.background_image.trim()) {
              newErrors.background_image = "Image URL is required";
            } else if (
              !/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(form.background_image.trim())
            ) {
              newErrors.background_image = "Invalid image URL";
            }
          
            // Description validation
            if (!form.description.trim()) {
              newErrors.description = "Description is required";
            } else if (form.description.length < 10 || form.description.length > 500) {
              newErrors.description = "Description must be between 10 and 500 characters";
            }
          
            // Released validation
            if (!form.released.trim()) {
              newErrors.released = "Release date is required";
            } else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.released.trim())) {
              newErrors.released = "Invalid date format";
            }
          
            // Rating validation
            if (!form.rating.trim()) {
              newErrors.rating = "Rating is required";
            } else if (form.rating < 0 || form.rating > 5) {
              newErrors.rating = "Rating must be between 0 and 5";
            }
          
            // Genre validation
            if (!form.genres.length) {
              newErrors.genre = "At least one genre is required";
            }
          
          setErrors(newErrors);
          };
          
        
    

    const submitHandler = (event) => {
      console.log(form)  
      event.preventDefault()
        axios.post("http://localhost:3001/videogames", form)
            .then(res => alert("Videogame Created"))
            .catch(err=> alert(err))

    }
    
    const handleGenreChange = (event) => {
        const { value, checked } = event.target;
      
        if (checked) {
          setForm({ ...form, genres: [...form.genres, value] });
        } else {
          const newGenres = form.genres.filter((genre) => genre !== value);
          setForm({ ...form, genres: newGenres });
        }
      };

      const handlePlatformChange = (event) => {
        const { value, checked } = event.target;
      
        if (checked) {
          setForm({ ...form, platforms: [...form.platforms, value] });
        } else {
          const newPlatforms = form.platforms.filter((platform) => platform !== value);
          setForm({ ...form, platforms: newPlatforms  });
        }
      };

      
      
    return (
        <form className="form-container" onSubmit={submitHandler}>

            <div className="form-containerBig">
               
                <h3 className="name2">CREATE NEW VIDEOGAME</h3>
                <br></br>
            </div>
            <div>
                <label className="form-label">Name: </label>
                <input type="text" value={form.name} name="name" onChange={changeHandler}></input>
                <span className="errors">{errors.name}</span>
            </div>
            <div>
                <label className="form-label">Image</label>
                <input type="url" value={form.background_image} name="background_image" onChange={changeHandler}></input>
                <span className="errors">{errors.background_image}</span>
            </div>

            <div>
                <label className="form-label">Description: </label>
                <textarea type="text" value={form.description} name="description" onChange={changeHandler}></textarea>
                <span className="errors">{errors.description}</span>
            </div>


            <div>
                <label className="form-label">Released</label>
                <input className="released" type="date" value={form.released} name="released" onChange={changeHandler}></input>
                <span className="errors">{errors.released}</span>
            </div>

            <div>
                <label className="form-label">Rating: </label>
                <input type="number" value={form.rating} name="rating" onChange={changeHandler}></input>
                <span className="errors">{errors.rating}</span>
            </div>

            <div>
                <label className="form-label">Platforms: </label>
                {allPlatforms.map((platform, index) => (
                    <div  key={index}>
                        <input
                            type="checkbox"
                            name="platform"
                            value={platform}
                            onChange={handlePlatformChange}
                            checked={form.platforms.includes(platform)}
                            />
                        
                        <label className="genres">{platform}</label>
                <span className="errors">{errors.platforms}</span>

            </div>
            ))}
              </div>
            <div className="form-genres"> </div>
            <div className="divGenres">
                <label className="name2">Genres: </label>
                {allGenres.map((genre) => (
                    <div  key={genre.id}>
                        <input
                            type="checkbox"
                            name="genre"
                            value={genre.id}
                            onChange={handleGenreChange}
                            checked={form.genres.includes(genre.id.toString())}
                            />
                        
                        <label className="genres">{genre.name}</label>
                        <span className="errors">{errors.genre}</span>
                    </div>
                ))}
           </div>

            <button  className="selectfont3" type="submit">Create</button>
            <NavLink to="/home">
                    <button className="selectfont3">Home</button>
                </NavLink>

        </form>

    )
}
export default Form;