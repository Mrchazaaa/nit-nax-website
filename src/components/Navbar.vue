<template>
  <div id="navcont">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div id="mobile-nav">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a href="#top">
          <h1 id="mobile-title">NitNax</h1>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#shop">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tutorials">Tutorials</a>
          </li>
          <li class="nav-item">
            <a href="#top">
              <h1 id="desktop-title">NitNax</h1>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#workshops">Workshops</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="nav-spacer"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
#navcont {
  @media screen and (min-width: 992px) {
    #mobile-nav {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
    #desktop-title {
      display: none;
    }
  }
  #nav-spacer {
    height: 80px;
  }
  .navbar {
    position: fixed !important;
    width: 100%;
    z-index: 1;
  }
  #mobile-nav {
    width: 100%;
  }
  button {
    position: absolute;
    top: 12px;
  }
  li {
    margin: 0 10px;
  }
  .navbar-nav {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  h1 {
    color: white !important;
    margin-bottom: 0px !important;
    text-align: center;
  }
}
</style>
