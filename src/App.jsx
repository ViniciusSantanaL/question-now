import { Header } from "./components/Header/index.jsx";

import styles from "./App.module.css";

import "./global.css";
import {Sidebar} from "./components/Sidebar/index.jsx";
import { Post } from "./components/Post/index.jsx";
export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post />
            <Post />
          </main>
      </div>
    </>
  )
}
