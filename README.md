<article class="markdown-body entry-content" itemprop="text"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Este proyecto se inició con la </font></font><a href="https://github.com/facebookincubator/create-react-app"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aplicación Create React</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A continuación encontrará información sobre cómo realizar tareas comunes. </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Puede encontrar la versión más reciente de esta guía </font></font><a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aquí</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font></p>
<h2><a href="#table-of-contents" aria-hidden="true" class="anchor" id="user-content-table-of-contents"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tabla de contenido</font></font></h2>
<ul>
<li><a href="#updating-to-new-releases"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Actualización a nuevas versiones</font></font></a></li>
<li><a href="#sending-feedback"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envío de comentarios</font></font></a></li>
<li><a href="#folder-structure"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Estructura de carpetas</font></font></a></li>
<li><a href="#available-scripts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Scripts disponibles</font></font></a>
<ul>
<li><a href="#npm-start"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm start</font></font></a></li>
<li><a href="#npm-test"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prueba npm</font></font></a></li>
<li><a href="#npm-run-build"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm ejecutar compilación</font></font></a></li>
<li><a href="#npm-run-eject"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ejecución npm ejecutar</font></font></a></li>
</ul>
</li>
<li><a href="#syntax-highlighting-in-the-editor"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Resaltado de sintaxis en el editor</font></font></a></li>
<li><a href="#displaying-lint-output-in-the-editor"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mostrar salida de pelusa en el editor</font></font></a></li>
<li><a href="#installing-a-dependency"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Instalando una Dependencia</font></font></a></li>
<li><a href="#importing-a-component"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Importación de un componente</font></font></a></li>
<li><a href="#adding-a-stylesheet"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agregar una hoja de estilo</font></font></a></li>
<li><a href="#post-processing-css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Postprocesamiento de CSS</font></font></a></li>
<li><a href="#adding-images-and-fonts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agregar imágenes y fuentes</font></font></a></li>
<li><a href="#using-the-public-folder"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Usando la </font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">carpeta</font></font></a></li>
<li><a href="#using-global-variables"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Usando variables globales</font></font></a></li>
<li><a href="#adding-bootstrap"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agregar Bootstrap</font></font></a></li>
<li><a href="#adding-flow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agregar flujo</font></font></a></li>
<li><a href="#adding-custom-environment-variables"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agregar variables de entorno personalizadas</font></font></a></li>
<li><a href="#can-i-use-decorators"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">¿Puedo usar decoradores?</font></font></a></li>
<li><a href="#integrating-with-a-node-backend"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Integración con un backend de nodo</font></font></a></li>
<li><a href="#proxying-api-requests-in-development"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Proxying solicitudes de API en desarrollo</font></font></a></li>
<li><a href="#using-https-in-development"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Uso de HTTPS en desarrollo</font></font></a></li>
<li><a href="#generating-dynamic-meta-tags-on-the-server"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Generando </font></font><code>&lt;meta&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">etiquetas </font><font style="vertical-align: inherit;">dinámicas </font><font style="vertical-align: inherit;">en el servidor</font></font></a></li>
<li><a href="#running-tests"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ejecutando pruebas</font></font></a>
<ul>
<li><a href="#filename-conventions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Convenciones de nombre de archivo</font></font></a></li>
<li><a href="#command-line-interface"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Interfaz de línea de comando</font></font></a></li>
<li><a href="#version-control-integration"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Version Control Integration</font></font></a></li>
<li><a href="#writing-tests"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Escritura de pruebas</font></font></a></li>
<li><a href="#testing-components"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Componentes de prueba</font></font></a></li>
<li><a href="#using-third-party-assertion-libraries"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Uso de bibliotecas de aserción de terceros</font></font></a></li>
<li><a href="#initializing-test-environment"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inicializando el entorno de prueba</font></font></a></li>
<li><a href="#focusing-and-excluding-tests"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Enfocando y Excluyendo Pruebas</font></font></a></li>
<li><a href="#coverage-reporting"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Informes de cobertura</font></font></a></li>
<li><a href="#continuous-integration"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Integración continua</font></font></a></li>
<li><a href="#disabling-jsdom"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deshabilitar jsdom</font></font></a></li>
<li><a href="#experimental-snapshot-testing"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prueba de instantáneas experimentales</font></font></a></li>
<li><a href="#editor-integration"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Integración del editor</font></font></a></li>
</ul>
</li>
<li><a href="#developing-components-in-isolation">Developing Components in Isolation</a></li>
<li><a href="#making-a-progressive-web-app">Making a Progressive Web App</a></li>
<li><a href="#deployment">Deployment</a>
<ul>
<li><a href="#serving-apps-with-client-side-routing">Serving Apps with Client-Side Routing</a></li>
<li><a href="#building-for-relative-paths">Building for Relative Paths</a></li>
<li><a href="#firebase">Firebase</a></li>
<li><a href="#github-pages">GitHub Pages</a></li>
<li><a href="#heroku">Heroku</a></li>
<li><a href="#modulus">Modulus</a></li>
<li><a href="#netlify">Netlify</a></li>
<li><a href="#now">Now</a></li>
<li><a href="#s3-and-cloudfront">S3 and CloudFront</a></li>
<li><a href="#surge">Surge</a></li>
</ul>
</li>
<li><a href="#troubleshooting">Troubleshooting</a>
<ul>
<li><a href="#npm-test-hangs-on-macos-sierra"><code>npm test</code> hangs on macOS Sierra</a></li>
<li><a href="#npm-run-build-silently-fails"><code>npm run build</code> silently fails</a></li>
</ul>
</li>
<li><a href="#something-missing">Something Missing?</a></li>
</ul>
<h2><a href="#updating-to-new-releases" aria-hidden="true" class="anchor" id="user-content-updating-to-new-releases"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Updating to New Releases</h2>
<p>Create React App is divided into two packages:</p>
<ul>
<li><code>create-react-app</code> is a global command-line utility that you use to create new projects.</li>
<li><code>react-scripts</code> is a development dependency in the generated projects (including this one).</li>
</ul>
<p>You almost never need to update <code>create-react-app</code> itself: it delegates all the setup to <code>react-scripts</code>.</p>
<p>When you run <code>create-react-app</code>, it always creates the project with the latest version of <code>react-scripts</code> so you’ll get all the new features and improvements in newly created apps automatically.</p>
<p>To update an existing project to a new version of <code>react-scripts</code>, <a href="https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md">open the changelog</a>, find the version you’re currently on (check <code>package.json</code> in this folder if you’re not sure), and apply the migration instructions for the newer versions.</p>
<p>In most cases bumping the <code>react-scripts</code> version in <code>package.json</code> and running <code>npm install</code> in this folder should be enough, but it’s good to consult the <a href="https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md">changelog</a> for potential breaking changes.</p>
<p>We commit to keeping the breaking changes minimal so you can upgrade <code>react-scripts</code> painlessly.</p>
<h2><a href="#sending-feedback" aria-hidden="true" class="anchor" id="user-content-sending-feedback"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending Feedback</h2>
<p>We are always open to <a href="https://github.com/facebookincubator/create-react-app/issues">your feedback</a>.</p>
<h2><a href="#folder-structure" aria-hidden="true" class="anchor" id="user-content-folder-structure"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Folder Structure</h2>
<p>After creation, your project should look like this:</p>
<pre><code>my-app/<font></font>
  README.md<font></font>
  node_modules/<font></font>
  package.json<font></font>
  public/<font></font>
    index.html<font></font>
    favicon.ico<font></font>
  src/<font></font>
    App.css<font></font>
    App.js<font></font>
    App.test.js<font></font>
    index.css<font></font>
    index.js<font></font>
    logo.svg<font></font>
</code></pre>
<p>For the project to build, <strong>these files must exist with exact filenames</strong>:</p>
<ul>
<li><code>public/index.html</code> is the page template;</li>
<li><code>src/index.js</code> is the JavaScript entry point.</li>
</ul>
<p>You can delete or rename the other files.</p>
<p>You may create subdirectories inside <code>src</code>. For faster rebuilds, only files inside <code>src</code> are processed by Webpack.<br>
You need to <strong>put any JS and CSS files inside <code>src</code></strong>, or Webpack won’t see them.</p>
<p>Only files inside <code>public</code> can be used from <code>public/index.html</code>.<br>
Read instructions below for using assets from JavaScript and HTML.</p>
<p>You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.</p>
<h2><a href="#available-scripts" aria-hidden="true" class="anchor" id="user-content-available-scripts"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Available Scripts</h2>
<p>In the project directory, you can run:</p>
<h3><a href="#npm-start" aria-hidden="true" class="anchor" id="user-content-npm-start"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>npm start</code></h3>
<p>Runs the app in the development mode.<br>
Open <a href="http://localhost:3000" rel="nofollow">http://localhost:3000</a> to view it in the browser.</p>
<p>The page will reload if you make edits.<br>
You will also see any lint errors in the console.</p>
<h3><a href="#npm-test" aria-hidden="true" class="anchor" id="user-content-npm-test"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>npm test</code></h3>
<p>Launches the test runner in the interactive watch mode.<br>
See the section about <a href="#running-tests">running tests</a> for more information.</p>
<h3><a href="#npm-run-build" aria-hidden="true" class="anchor" id="user-content-npm-run-build"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>npm run build</code></h3>
<p>Builds the app for production to the <code>build</code> folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.</p>
<p>The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!</p>
<p>See the section about <a href="#deployment">deployment</a> for more information.</p>
<h3><a href="#npm-run-eject" aria-hidden="true" class="anchor" id="user-content-npm-run-eject"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>npm run eject</code></h3>
<p><strong>Note: this is a one-way operation. Once you <code>eject</code>, you can’t go back!</strong></p>
<p>If you aren’t satisfied with the build tool and configuration choices, you can <code>eject</code> at any time. This command will remove the single build dependency from your project.</p>
<p>Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except <code>eject</code> will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.</p>
<p>You don’t have to ever use <code>eject</code>. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</p>
<h2><a href="#syntax-highlighting-in-the-editor" aria-hidden="true" class="anchor" id="user-content-syntax-highlighting-in-the-editor"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax Highlighting in the Editor</h2>
<p>To configure the syntax highlighting in your favorite text editor, head to the <a href="https://babeljs.io/docs/editors" rel="nofollow">Babel's docs</a> and follow the instructions. Some of the most popular editors are covered.</p>
<h2><a href="#displaying-lint-output-in-the-editor" aria-hidden="true" class="anchor" id="user-content-displaying-lint-output-in-the-editor"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Displaying Lint Output in the Editor</h2>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.2.0</code> and higher.</p>
</blockquote>
<p>Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.</p>
<p>They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.</p>
<p>You would need to install an ESLint plugin for your editor first.</p>
<blockquote>
<p><strong>A note for Atom <code>linter-eslint</code> users</strong></p>
</blockquote>
<blockquote>
<p>If you are using the Atom <code>linter-eslint</code> plugin, make sure that <strong>Use global ESLint installation</strong> option is checked:</p>
</blockquote>
<blockquote>
<a href="https://camo.githubusercontent.com/a82ed3dfb481cac5a709b910388f55e6925e34d5/687474703a2f2f692e696d6775722e636f6d2f79564e4e484a4d2e706e67" target="_blank"><img src="https://camo.githubusercontent.com/a82ed3dfb481cac5a709b910388f55e6925e34d5/687474703a2f2f692e696d6775722e636f6d2f79564e4e484a4d2e706e67" width="300" data-canonical-src="http://i.imgur.com/yVNNHJM.png" style="max-width:100%;"></a>
</blockquote>
<p>Then add this block to the <code>package.json</code> file of your project:</p>
<div class="highlight highlight-source-js"><pre>{
  <span class="pl-c"><span class="pl-c">//</span> ...</span>
  <span class="pl-s"><span class="pl-pds">"</span>eslintConfig<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>extends<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>react-app<span class="pl-pds">"</span></span><font></font>
  }<font></font>
}</pre></div>
<p>Finally, you will need to install some packages <em>globally</em>:</p>
<div class="highlight highlight-source-shell"><pre>npm install -g eslint-config-react-app@0.3.0 eslint@3.8.1 babel-eslint@7.0.0 eslint-plugin-react@6.4.1 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@2.2.3 eslint-plugin-flowtype@2.21.0</pre></div>
<p>We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already <a href="https://github.com/eslint/eslint/issues/3458">working on a solution to this</a> so this may become unnecessary in a couple of months.</p>
<h2><a href="#installing-a-dependency" aria-hidden="true" class="anchor" id="user-content-installing-a-dependency"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing a Dependency</h2>
<p>The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with <code>npm</code>:</p>
<pre><code>npm install --save &lt;library-name&gt;
</code></pre>
<h2><a href="#importing-a-component" aria-hidden="true" class="anchor" id="user-content-importing-a-component"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing a Component</h2>
<p>This project setup supports ES6 modules thanks to Babel.<br>
While you can still use <code>require()</code> and <code>module.exports</code>, we encourage you to use <a href="http://exploringjs.com/es6/ch_modules.html" rel="nofollow"><code>import</code> and <code>export</code></a> instead.</p>
<p>For example:</p>
<h3><a href="#buttonjs" aria-hidden="true" class="anchor" id="user-content-buttonjs"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Button.js</code></h3>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span>, { <span class="pl-smi">Component</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;<font></font>
<font></font>
<span class="pl-k">class</span> <span class="pl-en">Button</span> <span class="pl-k">extends</span> <span class="pl-e">Component</span> {
  <span class="pl-en">render</span>() {
    <span class="pl-c"><span class="pl-c">//</span> ...</span><font></font>
  }<font></font>
}<font></font>
<font></font>
<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">Button</span>; <span class="pl-c"><span class="pl-c">//</span> Don’t forget to use export default!</span></pre></div>
<h3><a href="#dangerbuttonjs" aria-hidden="true" class="anchor" id="user-content-dangerbuttonjs"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>DangerButton.js</code></h3>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span>, { <span class="pl-smi">Component</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">Button</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./Button<span class="pl-pds">'</span></span>; <span class="pl-c"><span class="pl-c">//</span> Import a component from another file</span><font></font>
<font></font>
<span class="pl-k">class</span> <span class="pl-en">DangerButton</span> <span class="pl-k">extends</span> <span class="pl-e">Component</span> {
  <span class="pl-en">render</span>() {
    <span class="pl-k">return</span> <span class="pl-k">&lt;</span>Button color<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span>;<font></font>
  }<font></font>
}<font></font>
<font></font>
<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">DangerButton</span>;</pre></div>
<p>Be aware of the <a href="http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281" rel="nofollow">difference between default and named exports</a>. It is a common source of mistakes.</p>
<p>We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use <code>export default Button</code> and <code>import Button from './Button'</code>.</p>
<p>Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.</p>
<p>Learn more about ES6 modules:</p>
<ul>
<li><a href="http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281" rel="nofollow">When to use the curly braces?</a></li>
<li><a href="http://exploringjs.com/es6/ch_modules.html" rel="nofollow">Exploring ES6: Modules</a></li>
<li><a href="https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules" rel="nofollow">Understanding ES6: Modules</a></li>
</ul>
<h2><a href="#adding-a-stylesheet" aria-hidden="true" class="anchor" id="user-content-adding-a-stylesheet"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding a Stylesheet</h2>
<p>This project setup uses <a href="https://webpack.github.io/" rel="nofollow">Webpack</a> for handling all assets. Webpack offers a custom way of “extending” the concept of <code>import</code> beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to <strong>import the CSS from the JavaScript file</strong>:</p>
<h3><a href="#buttoncss" aria-hidden="true" class="anchor" id="user-content-buttoncss"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Button.css</code></h3>
<div class="highlight highlight-source-css"><pre><span class="pl-e">.Button</span> {
  <span class="pl-c1"><span class="pl-c1">padding</span></span>: <span class="pl-c1">20<span class="pl-k">px</span></span>;<font></font>
}</pre></div>
<h3><a href="#buttonjs-1" aria-hidden="true" class="anchor" id="user-content-buttonjs-1"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Button.js</code></h3>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span>, { <span class="pl-smi">Component</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./Button.css<span class="pl-pds">'</span></span>; <span class="pl-c"><span class="pl-c">//</span> Tell Webpack that Button.js uses these styles</span><font></font>
<font></font>
<span class="pl-k">class</span> <span class="pl-en">Button</span> <span class="pl-k">extends</span> <span class="pl-e">Component</span> {
  <span class="pl-en">render</span>() {
    <span class="pl-c"><span class="pl-c">//</span> You can use them as regular CSS styles</span>
    <span class="pl-k">return</span> <span class="pl-k">&lt;</span>div className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Button<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span>;<font></font>
  }<font></font>
}</pre></div>
<p><strong>This is not required for React</strong> but many people find this feature convenient. You can read about the benefits of this approach <a href="https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b" rel="nofollow">here</a>. However you should be aware that this makes your code less portable to other build tools and environments than Webpack.</p>
<p>In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified <code>.css</code> file in the build output.</p>
<p>If you are concerned about using Webpack-specific semantics, you can put all your CSS right into <code>src/index.css</code>. It would still be imported from <code>src/index.js</code>, but you could always remove that import if you later migrate to a different build tool.</p>
<h2><a href="#post-processing-css" aria-hidden="true" class="anchor" id="user-content-post-processing-css"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Post-Processing CSS</h2>
<p>This project setup minifies your CSS and adds vendor prefixes to it automatically through <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> so you don’t need to worry about it.</p>
<p>For example, this:</p>
<div class="highlight highlight-source-css"><pre><span class="pl-e">.App</span> {
  <span class="pl-c1"><span class="pl-c1">display</span></span>: <span class="pl-c1">flex</span>;
  <span class="pl-c1"><span class="pl-c1">flex-direction</span></span>: <span class="pl-c1">row</span>;
  <span class="pl-c1"><span class="pl-c1">align-items</span></span>: <span class="pl-c1">center</span>;<font></font>
}</pre></div>
<p>becomes this:</p>
<div class="highlight highlight-source-css"><pre><span class="pl-e">.App</span> {
  <span class="pl-c1"><span class="pl-c1">display</span></span>: <span class="pl-c1">-webkit-box</span>;
  <span class="pl-c1"><span class="pl-c1">display</span></span>: <span class="pl-c1">-ms-flexbox</span>;
  <span class="pl-c1"><span class="pl-c1">display</span></span>: <span class="pl-c1">flex</span>;
  <span class="pl-c1"><span class="pl-c1">-webkit-box-orient</span></span>: <span class="pl-c1">horizontal</span>;
  <span class="pl-c1"><span class="pl-c1">-webkit-box-direction</span></span>: <span class="pl-c1">normal</span>;
      <span class="pl-c1"><span class="pl-c1">-ms-flex-direction</span></span>: <span class="pl-c1">row</span>;
          <span class="pl-c1"><span class="pl-c1">flex-direction</span></span>: <span class="pl-c1">row</span>;
  <span class="pl-c1"><span class="pl-c1">-webkit-box-align</span></span>: <span class="pl-c1">center</span>;
      <span class="pl-c1"><span class="pl-c1">-ms-flex-align</span></span>: <span class="pl-c1">center</span>;
          <span class="pl-c1"><span class="pl-c1">align-items</span></span>: <span class="pl-c1">center</span>;<font></font>
}</pre></div>
<p>There is currently no support for preprocessors such as Less, or for sharing variables across CSS files.</p>
<h2><a href="#adding-images-and-fonts" aria-hidden="true" class="anchor" id="user-content-adding-images-and-fonts"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Images and Fonts</h2>
<p>With Webpack, using static assets like images and fonts works similarly to CSS.</p>
<p>You can <strong><code>import</code> an image right in a JavaScript module</strong>. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.</p>
<p>Here is an example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">logo</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./logo.png<span class="pl-pds">'</span></span>; <span class="pl-c"><span class="pl-c">//</span> Tell Webpack this JS file uses this image</span><font></font>
<font></font>
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(logo); <span class="pl-c"><span class="pl-c">//</span> /logo.84287d09.png</span><font></font>
<font></font>
<span class="pl-k">function</span> <span class="pl-en">Header</span>() {
  <span class="pl-c"><span class="pl-c">//</span> Import result is the URL of your image</span>
  <span class="pl-k">return</span> <span class="pl-k">&lt;</span>img src<span class="pl-k">=</span>{logo} alt<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Logo<span class="pl-pds">"</span></span> <span class="pl-k">/</span><span class="pl-k">&gt;</span>;<font></font>
}<font></font>
<font></font>
<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">Header</span>;</pre></div>
<p>This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.</p>
<p>This works in CSS too:</p>
<div class="highlight highlight-source-css"><pre><span class="pl-e">.Logo</span> {
  <span class="pl-c1"><span class="pl-c1">background-image</span></span>: <span class="pl-c1">url</span>(<span class="pl-v">./logo.png</span>);<font></font>
}</pre></div>
<p>Webpack finds all relative module references in CSS (they start with <code>./</code>) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.</p>
<p>Please be advised that this is also a custom feature of Webpack.</p>
<p><strong>It is not required for React</strong> but many people enjoy it (and React Native uses a similar mechanism for images).<br>
An alternative way of handling static assets is described in the next section.</p>
<h2><a href="#using-the-public-folder" aria-hidden="true" class="anchor" id="user-content-using-the-public-folder"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the <code>public</code> Folder</h2>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.5.0</code> and higher.</p>
</blockquote>
<p>Normally we encourage you to <code>import</code> assets in JavaScript files as described above. This mechanism provides a number of benefits:</p>
<ul>
<li>Scripts and stylesheets get minified and bundled together to avoid extra network requests.</li>
<li>Missing files cause compilation errors instead of 404 errors for your users.</li>
<li>Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.</li>
</ul>
<p>However there is an <strong>escape hatch</strong> that you can use to add an asset outside of the module system.</p>
<p>If you put a file into the <code>public</code> folder, it will <strong>not</strong> be processed by Webpack. Instead it will be copied into the build folder untouched.   To reference assets in the <code>public</code> folder, you need to use a special variable called <code>PUBLIC_URL</code>.</p>
<p>Inside <code>index.html</code>, you can use it like this:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">link</span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>shortcut icon<span class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>%PUBLIC_URL%/favicon.ico<span class="pl-pds">"</span></span>&gt;</pre></div>
<p>Only files inside the <code>public</code> folder will be accessible by <code>%PUBLIC_URL%</code> prefix. If you need to use a file from <code>src</code> or <code>node_modules</code>, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.</p>
<p>When you run <code>npm run build</code>, Create React App will substitute <code>%PUBLIC_URL%</code> with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.</p>
<p>In JavaScript code, you can use <code>process.env.PUBLIC_URL</code> for similar purposes:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">render</span>() {
  <span class="pl-c"><span class="pl-c">//</span> Note: this is an escape hatch and should be used sparingly!</span>
  <span class="pl-c"><span class="pl-c">//</span> Normally we recommend using `import` for getting asset URLs</span>
  <span class="pl-c"><span class="pl-c">//</span> as described in “Adding Images and Fonts” above this section.</span>
  <span class="pl-k">return</span> <span class="pl-k">&lt;</span>img src<span class="pl-k">=</span>{<span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">PUBLIC_URL</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>/img/logo.png<span class="pl-pds">'</span></span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span>;<font></font>
}</pre></div>
<p>Keep in mind the downsides of this approach:</p>
<ul>
<li>None of the files in <code>public</code> folder get post-processed or minified.</li>
<li>Missing files will not be called at compilation time, and will cause 404 errors for your users.</li>
<li>Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.</li>
</ul>
<p>However, it can be handy for referencing assets like <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" rel="nofollow"><code>manifest.webmanifest</code></a> from HTML, or including small scripts like <a href="http://github.hubspot.com/pace/docs/welcome/" rel="nofollow"><code>pace.js</code></a> outside of the bundled code.</p>
<p>Note that if you add a <code>&lt;script&gt;</code> that declares global variables, you also need to read the next section on using them.</p>
<h2><a href="#using-global-variables" aria-hidden="true" class="anchor" id="user-content-using-global-variables"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Global Variables</h2>
<p>When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable.</p>
<p>You can avoid this by reading the global variable explicitly from the <code>window</code> object, for example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">$</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">$</span>;</pre></div>
<p>This makes it obvious you are using a global variable intentionally rather than because of a typo.</p>
<p>Alternatively, you can force the linter to ignore any line by adding <code>// eslint-disable-line</code> after it.</p>
<h2><a href="#adding-bootstrap" aria-hidden="true" class="anchor" id="user-content-adding-bootstrap"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Bootstrap</h2>
<p>You don’t have to use <a href="https://react-bootstrap.github.io" rel="nofollow">React Bootstrap</a> together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:</p>
<p>Install React Bootstrap and Bootstrap from NPM. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:</p>
<pre><code>npm install react-bootstrap --save<font></font>
npm install bootstrap@3 --save<font></font>
</code></pre>
<p>Import Bootstrap CSS and optionally Bootstrap theme CSS in the <code>src/index.js</code> file:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>bootstrap/dist/css/bootstrap.css<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>bootstrap/dist/css/bootstrap-theme.css<span class="pl-pds">'</span></span>;</pre></div>
<p>Import required React Bootstrap components within <code>src/App.js</code> file or your custom component files:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> { <span class="pl-smi">Navbar</span>, <span class="pl-smi">Jumbotron</span>, <span class="pl-smi">Button</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-bootstrap<span class="pl-pds">'</span></span>;</pre></div>
<p>Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example <a href="https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js" rel="nofollow"><code>App.js</code></a> redone using React Bootstrap.</p>
<h2><a href="#adding-flow" aria-hidden="true" class="anchor" id="user-content-adding-flow"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Flow</h2>
<p>Flow typing is currently <a href="https://github.com/facebookincubator/create-react-app/issues/72">not supported out of the box</a> with the default <code>.flowconfig</code> generated by Flow. If you run it, you might get errors like this:</p>
<div class="highlight highlight-source-js"><pre>node_modules<span class="pl-k">/</span>fbjs<span class="pl-k">/</span>lib<span class="pl-k">/</span><span class="pl-smi">Deferred</span>.<span class="pl-smi">js</span>.<span class="pl-smi">flow</span><span class="pl-k">:</span><span class="pl-c1">60</span>
 <span class="pl-c1">60</span><span class="pl-k">:</span>     <span class="pl-c1">Promise</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">done</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_promise</span>, <span class="pl-c1">arguments</span>);
                           <span class="pl-k">^^^^</span> property <span class="pl-s"><span class="pl-pds">`</span>done<span class="pl-pds">`</span></span>. <span class="pl-smi">Property</span> not found <span class="pl-k">in</span>
<span class="pl-c1">495</span><span class="pl-k">:</span> declare <span class="pl-k">class</span> <span class="pl-en">Promise</span><span class="pl-k">&lt;</span><span class="pl-k">+</span><span class="pl-c1">R</span><span class="pl-k">&gt;</span> {
     <span class="pl-k">^</span> <span class="pl-c1">Promise</span>. <span class="pl-smi">See</span> lib<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>private<span class="pl-pds">/</span></span>tmp<span class="pl-k">/</span>flow<span class="pl-k">/</span>flowlib_34952d31<span class="pl-k">/</span><span class="pl-smi">core</span>.<span class="pl-smi">js</span><span class="pl-k">:</span><span class="pl-c1">495</span><font></font>
<font></font>
node_modules<span class="pl-k">/</span>fbjs<span class="pl-k">/</span>lib<span class="pl-k">/</span><span class="pl-smi">shallowEqual</span>.<span class="pl-smi">js</span>.<span class="pl-smi">flow</span><span class="pl-k">:</span><span class="pl-c1">29</span>
 <span class="pl-c1">29</span><span class="pl-k">:</span>     <span class="pl-k">return</span> x <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> (x<span class="pl-k">:</span> $FlowIssue) <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> (y<span class="pl-k">:</span> $FlowIssue);
                                   <span class="pl-k">^^^^^^^^^^</span> identifier <span class="pl-s"><span class="pl-pds">`</span>$FlowIssue<span class="pl-pds">`</span></span>. <span class="pl-smi">Could</span> not resolve name</pre></div>
<p>To fix this, change your <code>.flowconfig</code> to look like this:</p>
<div class="highlight highlight-source-ini"><pre><span class="pl-en">[ignore]</span>
&lt;PROJECT_ROOT&gt;/node_modules/fbjs/.*</pre></div>
<p>Re-run flow, and you shouldn’t get any extra issues.</p>
<h2><a href="#adding-custom-environment-variables" aria-hidden="true" class="anchor" id="user-content-adding-custom-environment-variables"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Custom Environment Variables</h2>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.2.3</code> and higher.</p>
</blockquote>
<p>Your project can consume variables declared in your environment as if they were declared locally in your JS files. By
default you will have <code>NODE_ENV</code> defined for you, and any other environment variables starting with
<code>REACT_APP_</code>. These environment variables will be defined for you on <code>process.env</code>. For example, having an environment
variable named <code>REACT_APP_SECRET_CODE</code> will be exposed in your JS as <code>process.env.REACT_APP_SECRET_CODE</code>, in addition
to <code>process.env.NODE_ENV</code>.</p>
<blockquote>
<p>Note: Changing any environment variables will require you to restart the development server if it is running.</p>
</blockquote>
<p>These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.</p>
<p>First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined
in the environment inside a <code>&lt;form&gt;</code>:</p>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">render</span>() {
<span class="pl-k">  return</span> (<font></font>
    &lt;<span class="pl-ent">div</span>&gt;<font></font>
      &lt;<span class="pl-ent">small</span>&gt;You are running this application in &lt;<span class="pl-ent">b</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">process</span><span class="pl-k">.</span><span class="pl-c1">env</span><span class="pl-k">.</span><span class="pl-c1">NODE_ENV</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">b</span>&gt; mode.&lt;/<span class="pl-ent">small</span>&gt;<font></font>
      &lt;<span class="pl-ent">form</span>&gt;<font></font>
        &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">defaultValue</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">process</span><span class="pl-k">.</span><span class="pl-c1">env</span><span class="pl-k">.</span><span class="pl-c1">REACT_APP_SECRET_CODE</span></span><span class="pl-pse">}</span> /&gt;<font></font>
      &lt;/<span class="pl-ent">form</span>&gt;<font></font>
    &lt;/<span class="pl-ent">div</span>&gt;<font></font>
  );<font></font>
}</pre></div>
<p>During the build, <code>process.env.REACT_APP_SECRET_CODE</code> will be replaced with the current value of the <code>REACT_APP_SECRET_CODE</code> environment variable. Remember that the <code>NODE_ENV</code> variable will be set for you automatically.</p>
<p>When you load the app in the browser and inspect the <code>&lt;input&gt;</code>, you will see its value set to <code>abcdef</code>, and the bold text will show the environment provided when using <code>npm start</code>:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span>&gt;<font></font>
  &lt;<span class="pl-ent">small</span>&gt;You are running this application in &lt;<span class="pl-ent">b</span>&gt;development&lt;/<span class="pl-ent">b</span>&gt; mode.&lt;/<span class="pl-ent">small</span>&gt;<font></font>
  &lt;<span class="pl-ent">form</span>&gt;<font></font>
    &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>abcdef<span class="pl-pds">"</span></span> /&gt;<font></font>
  &lt;/<span class="pl-ent">form</span>&gt;<font></font>
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<p>Having access to the <code>NODE_ENV</code> is also useful for performing actions conditionally:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">if</span> (<span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">NODE_ENV</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">'</span>production<span class="pl-pds">'</span></span>) {
  <span class="pl-smi">analytics</span>.<span class="pl-en">disable</span>();<font></font>
}</pre></div>
<p>The above form is looking for a variable called <code>REACT_APP_SECRET_CODE</code> from the environment. In order to consume this
value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in
a <code>.env</code> file.</p>
<h3><a href="#adding-temporary-environment-variables-in-your-shell" aria-hidden="true" class="anchor" id="user-content-adding-temporary-environment-variables-in-your-shell"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Temporary Environment Variables In Your Shell</h3>
<p>Defining environment variables can vary between OSes. It's also important to know that this manner is temporary for the
life of the shell session.</p>
<h4><a href="#windows-cmdexe" aria-hidden="true" class="anchor" id="user-content-windows-cmdexe"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Windows (cmd.exe)</h4>
<div class="highlight highlight-source-batchfile"><pre><span class="pl-k">set</span> <span class="pl-smi">REACT_APP_SECRET_CODE</span><span class="pl-k">=</span>abcdef<span class="pl-k">&amp;&amp;</span>npm <span class="pl-k">start</span></pre></div>
<p>(Note: the lack of whitespace is intentional.)</p>
<h4><a href="#linux-os-x-bash" aria-hidden="true" class="anchor" id="user-content-linux-os-x-bash"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Linux, OS X (Bash)</h4>
<div class="highlight highlight-source-shell"><pre>REACT_APP_SECRET_CODE=abcdef npm start</pre></div>
<h3><a href="#adding-development-environment-variables-in-env" aria-hidden="true" class="anchor" id="user-content-adding-development-environment-variables-in-env"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Development Environment Variables In <code>.env</code></h3>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.5.0</code> and higher.</p>
</blockquote>
<p>To define permanent environment variables, create a file called <code>.env</code> in the root of your project:</p>
<pre><code>REACT_APP_SECRET_CODE=abcdef
</code></pre>
<p>These variables will act as the defaults if the machine does not explicitly set them.<br>
Please refer to the <a href="https://github.com/motdotla/dotenv">dotenv documentation</a> for more details.</p>
<blockquote>
<p>Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need
these defined as well. Consult their documentation how to do this. For example, see the documentation for <a href="https://docs.travis-ci.com/user/environment-variables/" rel="nofollow">Travis CI</a> or <a href="https://devcenter.heroku.com/articles/config-vars" rel="nofollow">Heroku</a>.</p>
</blockquote>
<h2><a href="#can-i-use-decorators" aria-hidden="true" class="anchor" id="user-content-can-i-use-decorators"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Can I Use Decorators?</h2>
<p>Many popular libraries use <a href="https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841" rel="nofollow">decorators</a> in their documentation.<br>
Create React App doesn’t support decorator syntax at the moment because:</p>
<ul>
<li>It is an experimental proposal and is subject to change.</li>
<li>The current specification version is not officially supported by Babel.</li>
<li>If the specification changes, we won’t be able to write a codemod because we don’t use them internally at Facebook.</li>
</ul>
<p>However in many cases you can rewrite decorator-based code without decorators just as fine.<br>
Please refer to these two threads for reference:</p>
<ul>
<li><a href="https://github.com/facebookincubator/create-react-app/issues/214">#214</a></li>
<li><a href="https://github.com/facebookincubator/create-react-app/issues/411">#411</a></li>
</ul>
<p>Create React App will add decorator support when the specification advances to a stable stage.</p>
<h2><a href="#integrating-with-a-node-backend" aria-hidden="true" class="anchor" id="user-content-integrating-with-a-node-backend"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Integrating with a Node Backend</h2>
<p>Check out <a href="https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/" rel="nofollow">this tutorial</a> for instructions on integrating an app with a Node backend running on another port, and using <code>fetch()</code> to access it. You can find the companion GitHub repository <a href="https://github.com/fullstackreact/food-lookup-demo">here</a>.</p>
<h2><a href="#proxying-api-requests-in-development" aria-hidden="true" class="anchor" id="user-content-proxying-api-requests-in-development"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Proxying API Requests in Development</h2>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.2.3</code> and higher.</p>
</blockquote>
<p>People often serve the front-end React app from the same host and port as their backend implementation.<br>
For example, a production setup might look like this after the app is deployed:</p>
<pre><code>/             - static server returns index.html with React app<font></font>
/todos        - static server returns index.html with React app<font></font>
/api/todos    - server handles any /api/* requests using the backend implementation<font></font>
</code></pre>
<p>Such setup is <strong>not</strong> required. However, if you <strong>do</strong> have a setup like this, it is convenient to write requests like <code>fetch('/api/todos')</code> without worrying about redirecting them to another host or port during development.</p>
<p>To tell the development server to proxy any unknown requests to your API server in development, add a <code>proxy</code> field to your <code>package.json</code>, for example:</p>
<div class="highlight highlight-source-js"><pre>  <span class="pl-s"><span class="pl-pds">"</span>proxy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://localhost:4000<span class="pl-pds">"</span></span>,</pre></div>
<p>This way, when you <code>fetch('/api/todos')</code> in development, the development server will recognize that it’s not a static asset, and will proxy your request to <code>http://localhost:4000/api/todos</code> as a fallback. The development server will only attempt to send requests without a <code>text/html</code> accept header to the proxy.</p>
<p>Conveniently, this avoids <a href="http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations" rel="nofollow">CORS issues</a> and error messages like this in development:</p>
<pre><code>Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
</code></pre>
<p>Keep in mind that <code>proxy</code> only has effect in development (with <code>npm start</code>), and it is up to you to ensure that URLs like <code>/api/todos</code> point to the right thing in production. You don’t have to use the <code>/api</code> prefix. Any unrecognized request without a <code>text/html</code> accept header will be redirected to the specified <code>proxy</code>.</p>
<p>Currently the <code>proxy</code> option only handles HTTP requests, and it won’t proxy WebSocket connections.<br>
If the <code>proxy</code> option is <strong>not</strong> flexible enough for you, alternatively you can:</p>
<ul>
<li>Enable CORS on your server (<a href="http://enable-cors.org/server_expressjs.html" rel="nofollow">here’s how to do it for Express</a>).</li>
<li>Use <a href="#adding-custom-environment-variables">environment variables</a> to inject the right server host and port into your app.</li>
</ul>
<h2><a href="#using-https-in-development" aria-hidden="true" class="anchor" id="user-content-using-https-in-development"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using HTTPS in Development</h2>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.4.0</code> and higher.</p>
</blockquote>
<p>You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using <a href="#proxying-api-requests-in-development">the "proxy" feature</a> to proxy requests to an API server when that API server is itself serving HTTPS.</p>
<p>To do this, set the <code>HTTPS</code> environment variable to <code>true</code>, then start the dev server as usual with <code>npm start</code>:</p>
<h4><a href="#windows-cmdexe-1" aria-hidden="true" class="anchor" id="user-content-windows-cmdexe-1"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Windows (cmd.exe)</h4>
<div class="highlight highlight-source-batchfile"><pre><span class="pl-k">set</span> <span class="pl-smi">HTTPS</span><span class="pl-k">=</span>true<span class="pl-k">&amp;&amp;</span>npm <span class="pl-k">start</span></pre></div>
<p>(Note: the lack of whitespace is intentional.)</p>
<h4><a href="#linux-os-x-bash-1" aria-hidden="true" class="anchor" id="user-content-linux-os-x-bash-1"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Linux, OS X (Bash)</h4>
<div class="highlight highlight-source-shell"><pre>HTTPS=true npm start</pre></div>
<p>Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.</p>
<h2><a href="#generating-dynamic-meta-tags-on-the-server" aria-hidden="true" class="anchor" id="user-content-generating-dynamic-meta-tags-on-the-server"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generating Dynamic <code>&lt;meta&gt;</code> Tags on the Server</h2>
<p>Since Create React App doesn’t support server rendering, you might be wondering how to make <code>&lt;meta&gt;</code> tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;!doctype html&gt;<font></font>
&lt;<span class="pl-ent">html</span> <span class="pl-e">lang</span>=<span class="pl-s"><span class="pl-pds">"</span>en<span class="pl-pds">"</span></span>&gt;<font></font>
  &lt;<span class="pl-ent">head</span>&gt;<font></font>
    &lt;<span class="pl-ent">meta</span> <span class="pl-e">property</span>=<span class="pl-s"><span class="pl-pds">"</span>og:title<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>%OG_TITLE%<span class="pl-pds">"</span></span>&gt;<font></font>
    &lt;<span class="pl-ent">meta</span> <span class="pl-e">property</span>=<span class="pl-s"><span class="pl-pds">"</span>og:description<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>%OG_DESCRIPTION%<span class="pl-pds">"</span></span>&gt;</pre></div>
<p>Then, on the server, regardless of the backend you use, you can read <code>index.html</code> into memory and replace <code>%OG_TITLE%</code>, <code>%OG_DESCRIPTION%</code>, and any other placeholders with values depending on the current URL. Just make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!</p>
<p>If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.</p>
<h2><a href="#running-tests" aria-hidden="true" class="anchor" id="user-content-running-tests"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Tests</h2>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.3.0</code> and higher.<br>
<a href="https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030">Read the migration guide to learn how to enable it in older projects!</a></p>
</blockquote>
<p>Create React App uses <a href="https://facebook.github.io/jest/" rel="nofollow">Jest</a> as its test runner. To prepare for this integration, we did a <a href="https://facebook.github.io/jest/blog/2016/09/01/jest-15.html" rel="nofollow">major revamp</a> of Jest so if you heard bad things about it years ago, give it another try.</p>
<p>Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.</p>
<p>While Jest provides browser globals such as <code>window</code> thanks to <a href="https://github.com/tmpvar/jsdom">jsdom</a>, they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.</p>
<p>We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.</p>
<h3><a href="#filename-conventions" aria-hidden="true" class="anchor" id="user-content-filename-conventions"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Filename Conventions</h3>
<p>Jest will look for test files with any of the following popular naming conventions:</p>
<ul>
<li>Files with <code>.js</code> suffix in <code>__tests__</code> folders.</li>
<li>Files with <code>.test.js</code> suffix.</li>
<li>Files with <code>.spec.js</code> suffix.</li>
</ul>
<p>The <code>.test.js</code> / <code>.spec.js</code> files (or the <code>__tests__</code> folders) can be located at any depth under the <code>src</code> top level folder.</p>
<p>We recommend to put the test files (or <code>__tests__</code> folders) next to the code they are testing so that relative imports appear shorter. For example, if <code>App.test.js</code> and <code>App.js</code> are in the same folder, the test just needs to <code>import App from './App'</code> instead of a long relative path. Colocation also helps find tests more quickly in larger projects.</p>
<h3><a href="#command-line-interface" aria-hidden="true" class="anchor" id="user-content-command-line-interface"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Command Line Interface</h3>
<p>When you run <code>npm test</code>, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like <code>npm start</code> recompiles the code.</p>
<p>The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:</p>
<p><a href="https://camo.githubusercontent.com/e17b470bdfc383db6ea4b32c4257d04af6e1e749/687474703a2f2f66616365626f6f6b2e6769746875622e696f2f6a6573742f696d672f626c6f672f31352d77617463682e676966" target="_blank"><img src="https://camo.githubusercontent.com/e17b470bdfc383db6ea4b32c4257d04af6e1e749/687474703a2f2f66616365626f6f6b2e6769746875622e696f2f6a6573742f696d672f626c6f672f31352d77617463682e676966" alt="Modo de reloj Jest" data-canonical-src="http://facebook.github.io/jest/img/blog/15-watch.gif" style="max-width:100%;"></a></p>
<h3><a href="#version-control-integration" aria-hidden="true" class="anchor" id="user-content-version-control-integration"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version Control Integration</h3>
<p>By default, when you run <code>npm test</code>, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.</p>
<p>Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press <code>a</code> in the watch mode to force Jest to run all tests.</p>
<p>Jest will always run all tests on a <a href="#continuous-integration">continuous integration</a> server or if the project is not inside a Git or Mercurial repository.</p>
<h3><a href="#writing-tests" aria-hidden="true" class="anchor" id="user-content-writing-tests"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing Tests</h3>
<p>To create tests, add <code>it()</code> (or <code>test()</code>) blocks with the name of the test and its code. You may optionally wrap them in <code>describe()</code> blocks for logical grouping but this is neither required nor recommended.</p>
<p>Jest provides a built-in <code>expect()</code> global function for making assertions. A basic test could look like this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">sum</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./sum<span class="pl-pds">'</span></span>;<font></font>
<font></font>
<span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">'</span>sums numbers<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> {
  <span class="pl-en">expect</span>(<span class="pl-en">sum</span>(<span class="pl-c1">1</span>, <span class="pl-c1">2</span>)).<span class="pl-en">toEqual</span>(<span class="pl-c1">3</span>);
  <span class="pl-en">expect</span>(<span class="pl-en">sum</span>(<span class="pl-c1">2</span>, <span class="pl-c1">2</span>)).<span class="pl-en">toEqual</span>(<span class="pl-c1">4</span>);<font></font>
});</pre></div>
<p>All <code>expect()</code> matchers supported by Jest are <a href="http://facebook.github.io/jest/docs/api.html#expect-value" rel="nofollow">extensively documented here</a>.<br>
You can also use <a href="http://facebook.github.io/jest/docs/api.html#tobecalled" rel="nofollow"><code>jest.fn()</code> and <code>expect(fn).toBeCalled()</code></a> to create “spies” or mock functions.</p>
<h3><a href="#testing-components" aria-hidden="true" class="anchor" id="user-content-testing-components"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing Components</h3>
<p>There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.</p>
<p>Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">ReactDOM</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./App<span class="pl-pds">'</span></span>;<font></font>
<font></font>
<span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">'</span>renders without crashing<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">div</span> <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">'</span>div<span class="pl-pds">'</span></span>);
  <span class="pl-smi">ReactDOM</span>.<span class="pl-en">render</span>(<span class="pl-k">&lt;</span>App <span class="pl-k">/</span><span class="pl-k">&gt;</span>, div);<font></font>
});</pre></div>
<p>This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in <code>src/App.test.js</code>.</p>
<p>When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.</p>
<p>If you’d like to test components in isolation from the child components they render, we recommend using <a href="http://airbnb.io/enzyme/docs/api/shallow.html" rel="nofollow"><code>shallow()</code> rendering API</a> from <a href="http://airbnb.io/enzyme/" rel="nofollow">Enzyme</a>. You can write a smoke test with it too:</p>
<div class="highlight highlight-source-shell"><pre>npm install --save-dev enzyme react-addons-test-utils</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> { <span class="pl-smi">shallow</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>enzyme<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./App<span class="pl-pds">'</span></span>;<font></font>
<font></font>
<span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">'</span>renders without crashing<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> {
  <span class="pl-en">shallow</span>(<span class="pl-k">&lt;</span>App <span class="pl-k">/</span><span class="pl-k">&gt;</span>);<font></font>
});</pre></div>
<p>Unlike the previous smoke test using <code>ReactDOM.render()</code>, this test only renders <code>&lt;App&gt;</code> and doesn’t go deeper. For example, even if <code>&lt;App&gt;</code> itself renders a <code>&lt;Button&gt;</code> that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports <a href="http://airbnb.io/enzyme/docs/api/mount.html" rel="nofollow">full rendering with <code>mount()</code></a>, and you can also use it for testing state changes and component lifecycle.</p>
<p>You can read the <a href="http://airbnb.io/enzyme/" rel="nofollow">Enzyme documentation</a> for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in <code>expect()</code> and <code>jest.fn()</code> for spies.</p>
<p>Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> { <span class="pl-smi">shallow</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>enzyme<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./App<span class="pl-pds">'</span></span>;<font></font>
<font></font>
<span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">'</span>renders welcome message<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">wrapper</span> <span class="pl-k">=</span> <span class="pl-en">shallow</span>(<span class="pl-k">&lt;</span>App <span class="pl-k">/</span><span class="pl-k">&gt;</span>);
  <span class="pl-k">const</span> <span class="pl-c1">welcome</span> <span class="pl-k">=</span> <span class="pl-k">&lt;</span>h2<span class="pl-k">&gt;</span>Welcome to React<span class="pl-k">&lt;</span><span class="pl-k">/</span>h2<span class="pl-k">&gt;</span>;
  <span class="pl-c"><span class="pl-c">//</span> expect(wrapper.contains(welcome)).to.equal(true);</span>
  <span class="pl-en">expect</span>(<span class="pl-smi">wrapper</span>.<span class="pl-c1">contains</span>(welcome)).<span class="pl-en">toEqual</span>(<span class="pl-c1">true</span>);<font></font>
});</pre></div>
<p>All Jest matchers are <a href="http://facebook.github.io/jest/docs/api.html#expect-value" rel="nofollow">extensively documented here</a>.<br>
Nevertheless you can use a third-party assertion library like <a href="http://chaijs.com/" rel="nofollow">Chai</a> if you want to, as described below.</p>
<h3><a href="#using-third-party-assertion-libraries" aria-hidden="true" class="anchor" id="user-content-using-third-party-assertion-libraries"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Third Party Assertion Libraries</h3>
<p>We recommend that you use <code>expect()</code> for assertions and <code>jest.fn()</code> for spies. If you are having issues with them please <a href="https://github.com/facebook/jest/issues/new">file those against Jest</a>, and we’ll fix them. We intend to keep making them better for React, supporting, for example, <a href="https://github.com/facebook/jest/pull/1566">pretty-printing React elements as JSX</a>.</p>
<p>However, if you are used to other libraries, such as <a href="http://chaijs.com/" rel="nofollow">Chai</a> and <a href="http://sinonjs.org/" rel="nofollow">Sinon</a>, or if you have existing code using them that you’d like to port over, you can import them normally like this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">sinon</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>sinon<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> { <span class="pl-smi">expect</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>chai<span class="pl-pds">'</span></span>;</pre></div>
<p>and then use them in your tests like you normally do.</p>
<h3><a href="#initializing-test-environment" aria-hidden="true" class="anchor" id="user-content-initializing-test-environment"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Initializing Test Environment</h3>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.4.0</code> and higher.</p>
</blockquote>
<p>If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a <code>src/setupTests.js</code> to your project. It will be automatically executed before running your tests.</p>
<p>For example:</p>
<h4><a href="#srcsetuptestsjs" aria-hidden="true" class="anchor" id="user-content-srcsetuptestsjs"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>src/setupTests.js</code></h4>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">localStorageMock</span> <span class="pl-k">=</span> {<font></font>
  getItem<span class="pl-k">:</span> <span class="pl-smi">jest</span>.<span class="pl-en">fn</span>(),<font></font>
  setItem<span class="pl-k">:</span> <span class="pl-smi">jest</span>.<span class="pl-en">fn</span>(),<font></font>
  clear<span class="pl-k">:</span> <span class="pl-smi">jest</span>.<span class="pl-en">fn</span>()<font></font>
};<font></font>
<span class="pl-c1">global</span>.<span class="pl-smi">localStorage</span> <span class="pl-k">=</span> localStorageMock</pre></div>
<h3><a href="#focusing-and-excluding-tests" aria-hidden="true" class="anchor" id="user-content-focusing-and-excluding-tests"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Focusing and Excluding Tests</h3>
<p>You can replace <code>it()</code> with <code>xit()</code> to temporarily exclude a test from being executed.<br>
Similarly, <code>fit()</code> lets you focus on a specific test without running any other tests.</p>
<h3><a href="#coverage-reporting" aria-hidden="true" class="anchor" id="user-content-coverage-reporting"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Coverage Reporting</h3>
<p>Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run <code>npm test -- --coverage</code> (note extra <code>--</code> in the middle) to include a coverage report like this:</p>
<p><a href="https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67" target="_blank"><img src="https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67" alt="informe de cobertura" data-canonical-src="http://i.imgur.com/5bFhnTS.png" style="max-width:100%;"></a></p>
<p>Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.</p>
<h3><a href="#continuous-integration" aria-hidden="true" class="anchor" id="user-content-continuous-integration"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Continuous Integration</h3>
<p>By default <code>npm test</code> runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called <code>CI</code>.</p>
<p>When creating a build of your application with <code>npm run build</code> linter warnings are not checked by default. Like <code>npm test</code>, you can force the build to perform a linter warning check by setting the environment variable <code>CI</code>. If any warnings are encountered then the build fails.</p>
<p>Popular CI servers already set the environment variable <code>CI</code> by default but you can do this yourself too:</p>
<h3><a href="#on-ci-servers" aria-hidden="true" class="anchor" id="user-content-on-ci-servers"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>On CI servers</h3>
<h4><a href="#travis-ci" aria-hidden="true" class="anchor" id="user-content-travis-ci"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Travis CI</h4>
<ol>
<li>Following the <a href="https://docs.travis-ci.com/user/getting-started/" rel="nofollow">Travis Getting started</a> guide for syncing your GitHub repository with Travis.  You may need to initialize some settings manually in your <a href="https://travis-ci.org/profile" rel="nofollow">profile</a> page.</li>
<li>Add a <code>.travis.yml</code> file to your git repository.</li>
</ol>
<pre><code>language: node_js<font></font>
node_js:<font></font>
  - 4<font></font>
  - 6<font></font>
cache:<font></font>
  directories:<font></font>
    - node_modules<font></font>
script:<font></font>
  - npm test<font></font>
  - npm run build<font></font>
</code></pre>
<ol>
<li>Trigger your first build with a git push.</li>
<li><a href="https://docs.travis-ci.com/user/customizing-the-build/" rel="nofollow">Customize your Travis CI Build</a> if needed.</li>
</ol>
<h3><a href="#on-your-own-environment" aria-hidden="true" class="anchor" id="user-content-on-your-own-environment"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>On your own environment</h3>
<h5><a href="#windows-cmdexe-2" aria-hidden="true" class="anchor" id="user-content-windows-cmdexe-2"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Windows (cmd.exe)</h5>
<div class="highlight highlight-source-batchfile"><pre><span class="pl-k">set</span> <span class="pl-smi">CI</span><span class="pl-k">=</span>true<span class="pl-k">&amp;&amp;</span>npm test</pre></div>
<div class="highlight highlight-source-batchfile"><pre><span class="pl-k">set</span> <span class="pl-smi">CI</span><span class="pl-k">=</span>true<span class="pl-k">&amp;&amp;</span>npm run build</pre></div>
<p>(Note: the lack of whitespace is intentional.)</p>
<h5><a href="#linux-os-x-bash-2" aria-hidden="true" class="anchor" id="user-content-linux-os-x-bash-2"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Linux, OS X (Bash)</h5>
<div class="highlight highlight-source-shell"><pre>CI=true npm <span class="pl-c1">test</span></pre></div>
<div class="highlight highlight-source-shell"><pre>CI=true npm run build</pre></div>
<p>The test command will force Jest to run tests once instead of launching the watcher.</p>
<blockquote>
<p>If you find yourself doing this often in development, please <a href="https://github.com/facebookincubator/create-react-app/issues/new">file an issue</a> to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.</p>
</blockquote>
<p>The build command will check for linter warnings and fail if any are found.</p>
<h3><a href="#disabling-jsdom" aria-hidden="true" class="anchor" id="user-content-disabling-jsdom"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disabling jsdom</h3>
<p>By default, the <code>package.json</code> of the generated project looks like this:</p>
<div class="highlight highlight-source-js"><pre>  <span class="pl-c"><span class="pl-c">//</span> ...</span>
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> ...</span>
    <span class="pl-s"><span class="pl-pds">"</span>test<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>react-scripts test --env=jsdom<span class="pl-pds">"</span></span>
  }</pre></div>
<p>If you know that none of your tests depend on <a href="https://github.com/tmpvar/jsdom">jsdom</a>, you can safely remove <code>--env=jsdom</code>, and your tests will run faster.<br>
To help you make up your mind, here is a list of APIs that <strong>need jsdom</strong>:</p>
<ul>
<li>Any browser globals like <code>window</code> and <code>document</code></li>
<li><a href="https://facebook.github.io/react/docs/top-level-api.html#reactdom.render" rel="nofollow"><code>ReactDOM.render()</code></a></li>
<li><a href="https://facebook.github.io/react/docs/test-utils.html#renderintodocument" rel="nofollow"><code>TestUtils.renderIntoDocument()</code></a> (<a href="https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91">a shortcut</a> for the above)</li>
<li><a href="http://airbnb.io/enzyme/docs/api/mount.html" rel="nofollow"><code>mount()</code></a> in <a href="http://airbnb.io/enzyme/index.html" rel="nofollow">Enzyme</a></li>
</ul>
<p>In contrast, <strong>jsdom is not needed</strong> for the following APIs:</p>
<ul>
<li><a href="https://facebook.github.io/react/docs/test-utils.html#shallow-rendering" rel="nofollow"><code>TestUtils.createRenderer()</code></a> (shallow rendering)</li>
<li><a href="http://airbnb.io/enzyme/docs/api/shallow.html" rel="nofollow"><code>shallow()</code></a> in <a href="http://airbnb.io/enzyme/index.html" rel="nofollow">Enzyme</a></li>
</ul>
<p>Finally, jsdom is also not needed for <a href="http://facebook.github.io/jest/blog/2016/07/27/jest-14.html" rel="nofollow">snapshot testing</a>. Longer term, this is the direction we are interested in exploring, but snapshot testing is <a href="https://github.com/facebookincubator/create-react-app/issues/372">not fully baked yet</a> so we don’t officially encourage its usage yet.</p>
<h3><a href="#experimental-snapshot-testing" aria-hidden="true" class="anchor" id="user-content-experimental-snapshot-testing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Experimental Snapshot Testing</h3>
<p>Snapshot testing is a new feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output.</p>
<p>This feature is experimental and still <a href="https://github.com/facebookincubator/create-react-app/issues/372">has major usage issues</a> so we only encourage you to use it if you like experimental technology. We intend to gradually improve it over time and eventually offer it as the default solution for testing React components, but this will take time. <a href="http://facebook.github.io/jest/blog/2016/07/27/jest-14.html" rel="nofollow">Read more about snapshot testing.</a></p>
<h3><a href="#editor-integration" aria-hidden="true" class="anchor" id="user-content-editor-integration"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor Integration</h3>
<p>If you use <a href="https://code.visualstudio.com" rel="nofollow">Visual Studio Code</a>, there is a <a href="https://github.com/orta/vscode-jest">Jest extension</a> which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.</p>
<p><a href="https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png" target="_blank"><img src="https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png" alt="VS Código Jest Preview" style="max-width:100%;"></a></p>
<h2><a href="#developing-components-in-isolation" aria-hidden="true" class="anchor" id="user-content-developing-components-in-isolation"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developing Components in Isolation</h2>
<p>Usually, in an app, you have a lot of UI components, and each of them has many different states.
For an example, a simple button component could have following states:</p>
<ul>
<li>With a text label.</li>
<li>With an emoji.</li>
<li>In the disabled mode.</li>
</ul>
<p>Usually, it’s hard to see these states without running a sample app or some examples.</p>
<p>Create React App doesn't include any tools for this by default, but you can easily add <a href="https://github.com/kadirahq/react-storybook">React Storybook</a> to your project. <strong>It is a third-party tool that lets you develop components and see all their states in isolation from your app</strong>.</p>
<p><a href="https://camo.githubusercontent.com/afa6a5df98c90ddb6b23b0fe6fba6b75c96f42b7/687474703a2f2f692e696d6775722e636f6d2f374349415770422e676966" target="_blank"><img src="https://camo.githubusercontent.com/afa6a5df98c90ddb6b23b0fe6fba6b75c96f42b7/687474703a2f2f692e696d6775722e636f6d2f374349415770422e676966" alt="React Storybook Demo" data-canonical-src="http://i.imgur.com/7CIAWpB.gif" style="max-width:100%;"></a></p>
<p>You can also deploy your Storybook as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app.</p>
<p><strong>Here’s how to setup your app with Storybook:</strong></p>
<p>First, install the following npm package globally:</p>
<div class="highlight highlight-source-shell"><pre>npm install -g getstorybook</pre></div>
<p>Then, run the following command inside your app’s directory:</p>
<div class="highlight highlight-source-shell"><pre>getstorybook</pre></div>
<p>After that, follow the instructions on the screen.</p>
<p>Learn more about React Storybook:</p>
<ul>
<li>Screencast: <a href="https://egghead.io/lessons/react-getting-started-with-react-storybook" rel="nofollow">Getting Started with React Storybook</a></li>
<li><a href="https://github.com/kadirahq/react-storybook">GitHub Repo</a></li>
<li><a href="https://getstorybook.io/docs" rel="nofollow">Documentation</a></li>
<li><a href="https://github.com/kadirahq/storyshots">Snapshot Testing</a> with React Storybook</li>
</ul>
<h2><a href="#making-a-progressive-web-app" aria-hidden="true" class="anchor" id="user-content-making-a-progressive-web-app"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Making a Progressive Web App</h2>
<p>You can turn your React app into a <a href="https://developers.google.com/web/progressive-web-apps/" rel="nofollow">Progressive Web App</a> by following the steps in <a href="https://github.com/jeffposnick/create-react-pwa">this repository</a>.</p>
<h2><a href="#deployment" aria-hidden="true" class="anchor" id="user-content-deployment"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deployment</h2>
<p><code>npm run build</code> creates a <code>build</code> directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served <code>index.html</code>, and requests to static paths like <code>/static/js/main.&lt;hash&gt;.js</code> are served with the contents of the <code>/static/js/main.&lt;hash&gt;.js</code> file. For example, Python contains a built-in HTTP server that can serve static files:</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c1">cd</span> build<font></font>
python -m SimpleHTTPServer 9000</pre></div>
<p>If you're using <a href="https://nodejs.org/" rel="nofollow">Node</a> and <a href="http://expressjs.com/" rel="nofollow">Express</a> as a server, it might look like this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">express</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>express<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">path</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">app</span> <span class="pl-k">=</span> <span class="pl-en">express</span>();<font></font>
<font></font>
<span class="pl-smi">app</span>.<span class="pl-en">use</span>(<span class="pl-smi">express</span>.<span class="pl-en">static</span>(<span class="pl-s"><span class="pl-pds">'</span>./build<span class="pl-pds">'</span></span>));<font></font>
<font></font>
<span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) {
  <span class="pl-smi">res</span>.<span class="pl-en">sendFile</span>(<span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>./build<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>index.html<span class="pl-pds">'</span></span>));<font></font>
});<font></font>
<font></font>
<span class="pl-smi">app</span>.<span class="pl-en">listen</span>(<span class="pl-c1">9000</span>);</pre></div>
<p>Create React App is not opinionated about your choice of web server. Any static file server will do. The <code>build</code> folder with static assets is the only output produced by Create React App.</p>
<p>However this is not quite enough if you use client-side routing. Read the next section if you want to support URLs like <code>/todos/42</code> in your single-page app.</p>
<h3><a href="#serving-apps-with-client-side-routing" aria-hidden="true" class="anchor" id="user-content-serving-apps-with-client-side-routing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Serving Apps with Client-Side Routing</h3>
<p>If you use routers that use the HTML5 <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries" rel="nofollow"><code>pushState</code> history API</a> under the hood (for example, <a href="https://github.com/ReactTraining/react-router">React Router</a> with <code>browserHistory</code>), many static file servers will fail. For example, if you used React Router with a route for <code>/todos/42</code>, the development server will respond to <code>localhost:3000/todos/42</code> properly, but an Express serving a production build as above will not.</p>
<p>This is because when there is a fresh page load for a <code>/todos/42</code>, the server looks for the file <code>build/todos/42</code> and does not find it. The server needs to be configured to respond to a request to <code>/todos/42</code> by serving <code>index.html</code>. For example, we can amend our Express example above to serve <code>index.html</code> for any unknown paths:</p>
<div class="highlight highlight-source-diff"><pre> app.use(express.static('./build'));<font></font>
<font></font>
<span class="pl-md"><span class="pl-md">-</span>app.get('/', function (req, res) {</span>
<span class="pl-mi1"><span class="pl-mi1">+</span>app.get('/*', function (req, res) {</span><font></font>
   res.sendFile(path.join(__dirname, './build', 'index.html'));<font></font>
 });</pre></div>
<p>Now requests to <code>/todos/42</code> will be handled correctly both in development and in production.</p>
<h3><a href="#building-for-relative-paths" aria-hidden="true" class="anchor" id="user-content-building-for-relative-paths"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building for Relative Paths</h3>
<p>By default, Create React App produces a build assuming your app is hosted at the server root.<br>
To override this, specify the <code>homepage</code> in your <code>package.json</code>, for example:</p>
<div class="highlight highlight-source-js"><pre>  <span class="pl-s"><span class="pl-pds">"</span>homepage<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://mywebsite.com/relativepath<span class="pl-pds">"</span></span>,</pre></div>
<p>This will let Create React App correctly infer the root path to use in the generated HTML file.</p>
<h3><a href="#firebase" aria-hidden="true" class="anchor" id="user-content-firebase"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Firebase</h3>
<p>Install the Firebase CLI if you haven't already by running <code>npm install -g firebase-tools</code>. Sign up for a <a href="https://console.firebase.google.com/" rel="nofollow">Firebase account</a> and create a new project. Run <code>firebase login</code> and login with your previous created Firebase account.</p>
<p>Then run the <code>firebase init</code> command from your project's root. You need to choose the <strong>Hosting: Configure and deploy Firebase Hosting sites</strong> and choose the Firebase project you created in the previous step. You will need to agree with <code>database.rules.json</code> being created, choose <code>build</code> as the public directory, and also agree to <strong>Configure as a single-page app</strong> by replying with <code>y</code>.</p>
<div class="highlight highlight-source-shell"><pre>    === Project Setup<font></font>
<font></font>
    First, let<span class="pl-s"><span class="pl-pds">'</span>s associate this project directory with a Firebase project.</span>
<span class="pl-s">    You can create multiple project aliases by running firebase use --add,</span>
<span class="pl-s">    but for now we<span class="pl-pds">'</span></span>ll just <span class="pl-c1">set</span> up a default project.<font></font>
<font></font>
    <span class="pl-k">?</span> What Firebase project <span class="pl-k">do</span> you want to associate as default<span class="pl-k">?</span> Example app (example-app-fd690)<font></font>
<font></font>
    === Database Setup<font></font>
<font></font>
    Firebase Realtime Database Rules allow you to define how your data should be<font></font>
    structured and when your data can be <span class="pl-c1">read</span> from and written to.<font></font>
<font></font>
    <span class="pl-k">?</span> What file should be used <span class="pl-k">for</span> Database Rules<span class="pl-k">?</span> database.rules.json<font></font>
    ✔  Database Rules <span class="pl-k">for</span> example-app-fd690 have been downloaded to database.rules.json.<font></font>
    Future modifications to database.rules.json will update Database Rules when you run<font></font>
    firebase deploy.<font></font>
<font></font>
    === Hosting Setup<font></font>
<font></font>
    Your public directory is the folder (relative to your project directory) that<font></font>
    will contain Hosting assets to uploaded with firebase deploy. If you<font></font>
    have a build process <span class="pl-k">for</span> your assets, use your build<span class="pl-s"><span class="pl-pds">'</span>s output directory.</span>
<span class="pl-s"></span>
<span class="pl-s">    ? What do you want to use as your public directory? build</span>
<span class="pl-s">    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes</span>
<span class="pl-s">    ✔  Wrote build/index.html</span>
<span class="pl-s"></span>
<span class="pl-s">    i  Writing configuration info to firebase.json...</span>
<span class="pl-s">    i  Writing project information to .firebaserc...</span>
<span class="pl-s"></span>
<span class="pl-s">    ✔  Firebase initialization complete!</span></pre></div>
<p>Now, after you create a production build with <code>npm run build</code>, you can deploy it by running <code>firebase deploy</code>.</p>
<div class="highlight highlight-source-shell"><pre>    === Deploying to <span class="pl-s"><span class="pl-pds">'</span>example-app-fd690<span class="pl-pds">'</span></span>...<font></font>
<font></font>
    i  deploying database, hosting<font></font>
    ✔  database: rules ready to deploy.<font></font>
    i  hosting: preparing build directory <span class="pl-k">for</span> upload...<font></font>
    Uploading: [<span class="pl-k">==============================</span>          ] 75%✔  hosting: build folder uploaded successfully<font></font>
    ✔  hosting: 8 files uploaded successfully<font></font>
    i  starting release process (may take several minutes)...<font></font>
<font></font>
    ✔  Deploy complete<span class="pl-k">!</span><font></font>
<font></font>
    Project Console: https://console.firebase.google.com/project/example-app-fd690/overview<font></font>
    Hosting URL: https://example-app-fd690.firebaseapp.com</pre></div>
<p>For more information see <a href="https://firebase.google.com/docs/web/setup" rel="nofollow">Add Firebase to your JavaScript Project</a>.</p>
<h3><a href="#github-pages" aria-hidden="true" class="anchor" id="user-content-github-pages"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GitHub Pages</h3>
<blockquote>
<p>Note: this feature is available with <code>react-scripts@0.2.0</code> and higher.</p>
</blockquote>
<h4><a href="#step-1-add-homepage-to-packagejson" aria-hidden="true" class="anchor" id="user-content-step-1-add-homepage-to-packagejson"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Add <code>homepage</code> to <code>package.json</code></h4>
<p><strong>The step below is important!</strong><br>
<strong>If you skip it, your app will not deploy correctly.</strong></p>
<p>Open your <code>package.json</code> and add a <code>homepage</code> field:</p>
<div class="highlight highlight-source-js"><pre>  <span class="pl-s"><span class="pl-pds">"</span>homepage<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>https://myusername.github.io/my-app<span class="pl-pds">"</span></span>,</pre></div>
<p>Create React App uses the <code>homepage</code> field to determine the root URL in the built HTML file.</p>
<h4><a href="#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson" aria-hidden="true" class="anchor" id="user-content-step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Install <code>gh-pages</code> and add <code>deploy</code> to <code>scripts</code> in <code>package.json</code></h4>
<p>Now, whenever you run <code>npm run build</code>, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.</p>
<p>To publish it at <a href="https://myusername.github.io/my-app" rel="nofollow">https://myusername.github.io/my-app</a>, run:</p>
<div class="highlight highlight-source-shell"><pre>npm install --save-dev gh-pages</pre></div>
<p>Add the following script in your <code>package.json</code>:</p>
<div class="highlight highlight-source-js"><pre>  <span class="pl-c"><span class="pl-c">//</span> ...</span>
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> ...</span>
    <span class="pl-s"><span class="pl-pds">"</span>deploy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>npm run build&amp;&amp;gh-pages -d build<span class="pl-pds">"</span></span>
  }</pre></div>
<p>(Note: the lack of whitespace is intentional.)</p>
<h4><a href="#step-3-deploy-the-site-by-running-npm-run-deploy" aria-hidden="true" class="anchor" id="user-content-step-3-deploy-the-site-by-running-npm-run-deploy"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: Deploy the site by running <code>npm run deploy</code></h4>
<p>Then run:</p>
<div class="highlight highlight-source-shell"><pre>npm run deploy</pre></div>
<h4><a href="#step-4-ensure-your-projects-settings-use-gh-pages" aria-hidden="true" class="anchor" id="user-content-step-4-ensure-your-projects-settings-use-gh-pages"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 4: Ensure your project's settings use <code>gh-pages</code></h4>
<p>Finally, make sure <strong>GitHub Pages</strong> option in your GitHub project settings is set to use the <code>gh-pages</code> branch:</p>
<p><a href="https://camo.githubusercontent.com/22aef6d3f95d8cfe08317f11b161eb9e8c1a6a65/687474703a2f2f692e696d6775722e636f6d2f48556a4572396c2e706e67" target="_blank"><img src="https://camo.githubusercontent.com/22aef6d3f95d8cfe08317f11b161eb9e8c1a6a65/687474703a2f2f692e696d6775722e636f6d2f48556a4572396c2e706e67" width="500" alt="configuración de la sucursal de gh-pages" data-canonical-src="http://i.imgur.com/HUjEr9l.png" style="max-width:100%;"></a></p>
<h4><a href="#step-5-optionally-configure-the-domain" aria-hidden="true" class="anchor" id="user-content-step-5-optionally-configure-the-domain"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 5: Optionally, configure the domain</h4>
<p>You can configure a custom domain with GitHub Pages by adding a <code>CNAME</code> file to the <code>public/</code> folder.</p>
<h4><a href="#notes-on-client-side-routing" aria-hidden="true" class="anchor" id="user-content-notes-on-client-side-routing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes on client-side routing</h4>
<p>GitHub Pages doesn't support routers that use the HTML5 <code>pushState</code> history API under the hood (for example, React Router using <code>browserHistory</code>). This is because when there is a fresh page load for a url like <code>http://user.github.io/todomvc/todos/42</code>, where <code>/todos/42</code> is a frontend route, the GitHub Pages server returns 404 because it knows nothing of <code>/todos/42</code>. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:</p>
<ul>
<li>You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to <code>hashHistory</code> for this effect, but the URL will be longer and more verbose (for example, <code>http://user.github.io/todomvc/#/todos/42?_k=yknaj</code>). <a href="https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#histories">Read more</a> about different history implementations in React Router.</li>
<li>Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your <code>index.html</code> page with a special redirect parameter. You would need to add a <code>404.html</code> file with the redirection code to the <code>build</code> folder before deploying your project, and you’ll need to add code handling the redirect parameter to <code>index.html</code>. You can find a detailed explanation of this technique <a href="https://github.com/rafrex/spa-github-pages">in this guide</a>.</li>
</ul>
<h3><a href="#heroku" aria-hidden="true" class="anchor" id="user-content-heroku"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Heroku</h3>
<p>Use the <a href="https://github.com/mars/create-react-app-buildpack">Heroku Buildpack for Create React App</a>.<br>
You can find instructions in <a href="https://blog.heroku.com/deploying-react-with-zero-configuration" rel="nofollow">Deploying React with Zero Configuration</a>.</p>
<h3><a href="#modulus" aria-hidden="true" class="anchor" id="user-content-modulus"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modulus</h3>
<p>See the <a href="http://blog.modulus.io/deploying-react-apps-on-modulus" rel="nofollow">Modulus blog post</a> on how to deploy your react app to Modulus.</p>
<h2><a href="#netlify" aria-hidden="true" class="anchor" id="user-content-netlify"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Netlify</h2>
<p><strong>To do a manual deploy to Netlify's CDN:</strong></p>
<div class="highlight highlight-source-shell"><pre>npm install netlify-cli<font></font>
netlify deploy</pre></div>
<p>Choose <code>build</code> as the path to deploy.</p>
<p><strong>To setup continuous delivery:</strong></p>
<p>With this setup Netlify will build and deploy when you push to git or open a pull request:</p>
<ol>
<li><a href="https://app.netlify.com/signup" rel="nofollow">Start a new netlify project</a></li>
<li>Pick your Git hosting service and select your repository</li>
<li>Click <code>Build your site</code></li>
</ol>
<p><strong>Support for client-side routing:</strong></p>
<p>To support <code>pushState</code>, make sure to create a <code>public/_redirects</code> file with the following rewrite rules:</p>
<pre><code>/*  /index.html  200
</code></pre>
<p>When you build the project, Create React App will place the <code>public</code> folder contents into the build output.</p>
<h3><a href="#now" aria-hidden="true" class="anchor" id="user-content-now"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Now</h3>
<p>See <a href="https://github.com/xkawi/create-react-app-now">this example</a> for a zero-configuration single-command deployment with <a href="https://zeit.co/now" rel="nofollow">now</a>.</p>
<h3><a href="#s3-and-cloudfront" aria-hidden="true" class="anchor" id="user-content-s3-and-cloudfront"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>S3 and CloudFront</h3>
<p>See this <a href="https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af" rel="nofollow">blog post</a> on how to deploy your React app to Amazon Web Services <a href="https://aws.amazon.com/s3" rel="nofollow">S3</a> and <a href="https://aws.amazon.com/cloudfront/" rel="nofollow">CloudFront</a>.</p>
<h3><a href="#surge" aria-hidden="true" class="anchor" id="user-content-surge"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Surge</h3>
<p>Install the Surge CLI if you haven't already by running <code>npm install -g surge</code>. Run the <code>surge</code> command and log in you or create a new account. You just need to specify the <em>build</em> folder and your custom domain, and you are done.</p>
<div class="highlight highlight-source-shell"><pre>              email: email@domain.com<font></font>
           password: <span class="pl-k">********</span><font></font>
       project path: /path/to/project/build<font></font>
               size: 7 files, 1.8 MB<font></font>
             domain: create-react-app.surge.sh<font></font>
             upload: [<span class="pl-k">====================</span>] 100%, eta: 0.0s<font></font>
   propagate on CDN: [<span class="pl-k">====================</span>] 100%<font></font>
               plan: Free<font></font>
              users: email@domain.com<font></font>
         IP Address: X.X.X.X<font></font>
<font></font>
    Success<span class="pl-k">!</span> Project is published and running at create-react-app.surge.sh</pre></div>
<p>Note that in order to support routers that use HTML5 <code>pushState</code> API, you may want to rename the <code>index.html</code> in your build folder to <code>200.html</code> before deploying to Surge. This <a href="https://surge.sh/help/adding-a-200-page-for-client-side-routing" rel="nofollow">ensures that every URL falls back to that file</a>.</p>
<h2><a href="#troubleshooting" aria-hidden="true" class="anchor" id="user-content-troubleshooting"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h2>
<h3><a href="#npm-test-hangs-on-macos-sierra" aria-hidden="true" class="anchor" id="user-content-npm-test-hangs-on-macos-sierra"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>npm test</code> hangs on macOS Sierra</h3>
<p>If you run <code>npm test</code> and the console gets stuck after printing <code>react-scripts test --env=jsdom</code> to the console there might be a problem with your <a href="https://facebook.github.io/watchman/" rel="nofollow">Watchman</a> installation as described in <a href="https://github.com/facebookincubator/create-react-app/issues/713">facebookincubator/create-react-app#713</a>.</p>
<p>We recommend deleting <code>node_modules</code> in your project and running <code>npm install</code> (or <code>yarn</code> if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:</p>
<ul>
<li><a href="https://github.com/facebook/jest/issues/1767">facebook/jest#1767</a></li>
<li><a href="https://github.com/facebook/watchman/issues/358">facebook/watchman#358</a></li>
<li><a href="https://github.com/ember-cli/ember-cli/issues/6259">ember-cli/ember-cli#6259</a></li>
</ul>
<p>It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use <a href="http://brew.sh/" rel="nofollow">Homebrew</a>, you can run these commands to update it:</p>
<pre><code>watchman shutdown-server<font></font>
brew update<font></font>
brew reinstall watchman<font></font>
</code></pre>
<p>You can find <a href="https://facebook.github.io/watchman/docs/install.html#build-install" rel="nofollow">other installation methods</a> on the Watchman documentation page.</p>
<p>If this still doesn't help, try running <code>launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist</code>.</p>
<p>There are also reports that <em>uninstalling</em> Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.</p>
<h3><a href="#npm-run-build-silently-fails" aria-hidden="true" class="anchor" id="user-content-npm-run-build-silently-fails"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>npm run build</code> silently fails</h3>
<p>It is reported that <code>npm run build</code> can fail on machines with no swap space, which is common in cloud environments. If <a href="https://github.com/facebookincubator/create-react-app/issues/1133#issuecomment-264612171">the symptoms are matching</a>, consider adding some swap space to the machine you’re building on, or build the project locally.</p>
<h2><a href="#something-missing" aria-hidden="true" class="anchor" id="user-content-something-missing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Something Missing?</h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Si tiene ideas para más recetas de "Cómo hacer" que deberían estar en esta página, ¡ </font></font><a href="https://github.com/facebookincubator/create-react-app/issues"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">háganoslo saber</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> o </font></font><a href="https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">contribuya un poco!</font></font></a></p>
</article>
