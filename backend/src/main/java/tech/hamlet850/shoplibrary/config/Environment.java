package tech.hamlet850.shoplibrary.config;

import tech.hamlet850.shoplibrary.env.Settings;

public final class Environment {

  private final String host;
  private static Environment instance;

  private Environment() {
    this.host = Settings.getHOST();
  }

  public static Environment getInstance() {
    if (instance == null) {
      instance = new Environment();
    }
    return instance;
  }

  public String getHost() {
    return instance.host;
  }
}