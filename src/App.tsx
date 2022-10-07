import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './app.module.css';
import './global.css'

import posts from '../post.json';

import { Body } from './components/Body'

function App() {

  return (
    <div >
      <Header />

      <div className={styles.content}>
        <Sidebar />

        {posts.map((post : any) => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}

      </div>
      

      {/* <div className={styles.content}>
        <Body />
      </div> */}

    </div>
  )
}

export default App;
