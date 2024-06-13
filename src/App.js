import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// import LoadingBar from 'react-top-loading-bar'


const App=()=>{
  // state={
  //   progress:0
  // }
  // setProgress(){
  //     this.setState({progress:this.state.progress})
  // }
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><News country="in" pageSize={15} category="general"></News></>
    },
    {
      path:"general",
      element:<><Navbar/><News country="in" pageSize={15} category="general"></News></>
    },
      {
        path:"business",
        element:<><Navbar/><News country="in" pageSize={15} category="business" ></News></>
      },
      {
        path:"entertainment",
        element:<><Navbar/>
        <News country="in" pageSize={15} category="entertainment" ></News>
        </>
      },
      {
        path:"sports",
        element:<><Navbar/>
        <News country="in" pageSize={15} category="sports" ></News>
        </>
      },
      {
        path:"health",
        element:<><Navbar/>
        <News country="in" pageSize={15} category="health" ></News>
        </>
      },
      {
        path:"science",
        element:<><Navbar/>
        <News country="in" pageSize={15} category="science" ></News>
        </>
      },
      {
        path:"technology",
        element:<><Navbar/>
        <News country="in" pageSize={15} category="technology" ></News>
        </>
      }
  
    ]);
    return (
      <>
      {/* <Router> */}
     
      
       {/* <LoadingBar
        color='#f11946'
        progress={progress}
      /> */}
         {/* <Navbar/> */}
         <RouterProvider router={router}/>
        {/* <Routes>
          <Route path="/" element={<News country="in" pageSize={15} category="Home" ></News>} />
           <Route exact path="/business" element={<News country="in" pageSize={15} category="business" ></News>} />
           <Route exact path="/general" element={<News country="in" pageSize={15} category="general" ></News>} />
           <Route exact path="/entertainment" element={<News country="in" pageSize={15} category="entertainment" ></News>} />
           <Route exact path="/sports" element={<News country="in" pageSize={15} category="sports" ></News>} />
           <Route exact path="/technology" element={<News country="in" pageSize={15} category="technology" ></News>} />
           <Route exact path="/science" element={<News country="in" pageSize={15} category="science" ></News>} />
           <Route exact path="/health" element={<News country="in" pageSize={15} category="health" ></News>} />
        </Routes> */}
        {/* </BrowserRouter> */}
    
      
      {/* </Router>  */}
      </>
    )
  }

export default App
