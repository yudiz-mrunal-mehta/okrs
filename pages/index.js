import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { gql } from '@apollo/client';
import client from '../apollo-client';

export default function Home({ result }) {
  return <div>Hello</div>;
  // console.log('result', result);
  /*  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar}>
        {result.map((header) => (
          <li className={styles.navbar}>
            <a className={styles.navbar}>{header.sTitle}</a>
          </li>
        ))}
      </ul>
    </nav>
  ); */
}

/* export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetMenuTree {
        getMenuTree {
          aResults {
            _id
            sTitle
            sSlug
            bIsMulti
            sUrl
            nSort
            eUrlTarget
            eMenuType
            oChildren {
              _id
              sTitle
              sSlug
              sUrl
              eUrlTarget
              eMenuType
            }
            eStatus
          }
        }
      }
    `,
  });
  return {
    props: {
      result: data.getMenuTree.aResults,
    },
  };
} */
