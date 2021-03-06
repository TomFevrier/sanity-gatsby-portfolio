import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from './project-preview.module.css';

const ProjectPreview = node => (
    <AniLink paintDrip color="rebeccapurple" to={`/projet/${node.slug}`}>
        <div className={styles.card}>
            {node.featured_image && <Img fluid={node.featured_image.childImageSharp.fluid} className={styles.thumbnail} />}
            <div className={styles.cache}></div>
            <div className={styles.info}>
                <h2>
                    <span>{node.title}</span>
                </h2>
                <p>
                    {node.publisher && (
                        <span>
                            <b>{node.publisher.name}</b> &mdash;{' '}
                        </span>
                    )}
                    {!node.publisher.name.startsWith('Projet') && <span>{new Date(node.date).toLocaleDateString('fr-FR')}</span>}
                    {node.publisher.name.startsWith('Projet') && (
                        <span>
                            {new Date(node.date).toLocaleDateString('fr-FR', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                    )}
                </p>
            </div>
        </div>
    </AniLink>
);

export default ProjectPreview;
