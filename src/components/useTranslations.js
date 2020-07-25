import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocaleContext } from './Layout';

function useTranslations() {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext);
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // Only return translations for the current locale
  const { translations } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(
      filter: { sourceInstanceName: { eq: "translations" } }
    ) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            home

            hello
            subline
            latestPosts
            category
            allPosts
            toRead
            TableofContents
            next
            prev
            of

            views
            WrittenBy
            button
            sharePost

            aboutProject

            imageSource

            copyrightNotice
            
            privacypolicy
            cookiedescription
            accept
            ad
            
            mostPopularPages
            
            adNotice
            
            formEmail
            formSubscribe
            formDesc1
            formDesc2
            formSuccess
            formThankYou
            
            german
            english
          }
        }
      }
    }
  }
`;
