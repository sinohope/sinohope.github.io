import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'For Users',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <div className={styles.buttons}>
            <Link
              to="/docs/use/cases/products">
              Products&Solutions
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/use/user-guide/SUMMARY">
              User Guide
            </Link>
          </div>
      </>
    ),
  },
  {
    title: 'For Learners',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            to="/docs/learn/news/latest">
            News
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            to="/blog">
            Blog
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            href="https://space.bilibili.com/3493266041342842/channel/series">
            Sinohope Lecture
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'For Developers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       <div className={styles.buttons}>
            <Link
              to="/docs/develop/get-started/quick-start">
              Get Started
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/category/openloop-api">
              OpenLoop API
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/category/mpc-waas-api">
              MPC WaaS API
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/docs/category/full-custody-waas-api">
              Full Custody WaaS API
            </Link>
          </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
