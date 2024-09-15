import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Blogdata from '../Blogdata';
import Emptyfile from '../../singlepage/Emptyfile';
import HeadTitle from '../../Headtitle/HeadTitle';

export default function Blogsingle() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Find the blog item based on the id from URL
    let selectedItem = Blogdata.find((item) => item.id === parseInt(id));
    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />
      {item ? (
        <div className='single-page top blog'>
          <div className='container'>
            <Link to="/blog" className='primary-btn back'>Go to Blog</Link>
            <div className='content flex'>
              <div className='main content'>
                <div className='disc flex justify-content-between '>
                  <img
                    src={item.cover}
                    // style={{
                    //   width: "400px",
                    //   height: "400px",
                    //   borderRadius: "50%",
                    //   border: "3px solid gray",
                    //   padding: "20px"
                    // }}
                    alt={item.title}
                  />
                  <div className='data'>
                    <p style={{ marginTop: "30px", color: "gray" }}>
                      {item.desc || "No description available."}
                    </p>

                    <div className='category flex_space' style={{ marginTop: "40px" }}>
                      <label style={{ maxWidth: "500px", color: "white",fontFamily:"cursive"}}>{item.category}</label>
                      <p style={{ maxWidth: "500px", color: "gray" }}>{item.date}</p>
                    </div>

                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <p>{item.para || "No additional information."}</p>

                    <h2>Two Column Text Sample</h2>
                    <div className='para flex_space'>
                      <p>{item.para}</p>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='side-content'>
                <div className='category-list'>
                  <h2>Category</h2>
                  <hr />
                  <ul>
                    {Blogdata.map((item) => (
                      <li key={item.id}>
                        <i className="fas fa-play-circle"></i> {item.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Emptyfile />
      )}
    </>
  );
}
