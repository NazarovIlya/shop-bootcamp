package tech.hamlet850.shoplibrary.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import tech.hamlet850.shoplibrary.entity.Product;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

  private String clientUrl = Environment.getInstance().getHost();

  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
    HttpMethod[] unsupportedActions = {

    };

    config.exposeIdsFor(Product.class);

    disableHttpMethods(Product.class, config, unsupportedActions);

    cors.addMapping(config.getBasePath() + "/**").allowedOrigins(clientUrl);
  }

  private void disableHttpMethods(
      Class<?> self,
      RepositoryRestConfiguration config,
      HttpMethod[] unsupportedActions) {
    config.getExposureConfiguration()
        .forDomainType(self)
        .withItemExposure(
            (metadata, httpMethods) -> httpMethods.disable(unsupportedActions))
        .withCollectionExposure(
            (metadata, httpMethods) -> httpMethods.disable(unsupportedActions));
  }
}