<template>
  <div id="page">
    <div class="container">
      <BaseHeader />

      <!-- #masthead -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area column two-thirds">
          <main id="main" class="site-main" role="main">
            <slot />
          </main>
          <!-- #main -->
        </div>
        <!-- #primary -->

        <BaseSidebar />
        <!-- #secondary -->
      </div>
      <!-- #content -->
    </div>
    <!-- .container -->
    <BaseFooter />
  </div>
</template>
