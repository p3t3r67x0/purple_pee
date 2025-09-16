<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <div id="xhr" class="container mx-auto md:flex">
      <div class="md:w-3/12 bg-white rounded shadow-md leading-normal mx-3 md:mr-3 md:ml-0 mb-6 px-3 pt-2 pb-3">
        <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">Navigation</h4>
        <ul class="mb-6">
          <li class="mb-3">
            <nuxt-link to="/docs/api" class="text-blue-600 hover:text-blue-700">API Documentation</nuxt-link>
          </li>
          <li class="mb-3">
            <nuxt-link to="/docs/examples/server" class="text-blue-600 hover:text-blue-700">HTTP Server Names</nuxt-link>
          </li>
          <li class="mb-3">
            <nuxt-link to="/docs/examples/status" class="text-blue-600 hover:text-blue-700">HTTP Status Codes</nuxt-link>
          </li>
        </ul>
        <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">Index</h4>
        <ul>
          <li class="mb-3">
            <a href="#query1" class="text-blue-600 hover:text-blue-700">Status Code 100</a>
          </li>
          <li class="mb-3">
            <a href="#query2" class="text-blue-600 hover:text-blue-700">Status Code 101</a>
          </li>
          <li class="mb-3">
            <a href="#query3" class="text-blue-600 hover:text-blue-700">Status Code 102</a>
          </li>
          <li class="mb-3">
            <a href="#query4" class="text-blue-600 hover:text-blue-700">Status Code 200</a>
          </li>
          <li class="mb-3">
            <a href="#query5" class="text-blue-600 hover:text-blue-700">Status Code 201</a>
          </li>
          <li class="mb-3">
            <a href="#query6" class="text-blue-600 hover:text-blue-700">Status Code 202</a>
          </li>
          <li class="mb-3">
            <a href="#query7" class="text-blue-600 hover:text-blue-700">Status Code 203</a>
          </li>
          <li class="mb-3">
            <a href="#query8" class="text-blue-600 hover:text-blue-700">Status Code 204</a>
          </li>
          <li class="mb-3">
            <a href="#query9" class="text-blue-600 hover:text-blue-700">Status Code 205</a>
          </li>
          <li class="mb-3">
            <a href="#query10" class="text-blue-600 hover:text-blue-700">Status Code 206</a>
          </li>
          <li class="mb-3">
            <a href="#query11" class="text-blue-600 hover:text-blue-700">Status Code 207</a>
          </li>
          <li class="mb-3">
            <a href="#query12" class="text-blue-600 hover:text-blue-700">Status Code 208</a>
          </li>
          <li class="mb-3">
            <a href="#query13" class="text-blue-600 hover:text-blue-700">Status Code 226</a>
          </li>
          <li class="mb-3">
            <a href="#query14" class="text-blue-600 hover:text-blue-700">Status Code 300</a>
          </li>
          <li class="mb-3">
            <a href="#query15" class="text-blue-600 hover:text-blue-700">Status Code 301</a>
          </li>
          <li class="mb-3">
            <a href="#query16" class="text-blue-600 hover:text-blue-700">Status Code 302</a>
          </li>
          <li class="mb-3">
            <a href="#query17" class="text-blue-600 hover:text-blue-700">Status Code 303</a>
          </li>
          <li class="mb-3">
            <a href="#query18" class="text-blue-600 hover:text-blue-700">Status Code 304</a>
          </li>
          <li class="mb-3">
            <a href="#query19" class="text-blue-600 hover:text-blue-700">Status Code 305</a>
          </li>
          <li class="mb-3">
            <a href="#query20" class="text-blue-600 hover:text-blue-700">Status Code 307</a>
          </li>
          <li class="mb-3">
            <a href="#query21" class="text-blue-600 hover:text-blue-700">Status Code 308</a>
          </li>
          <li class="mb-3">
            <a href="#query22" class="text-blue-600 hover:text-blue-700">Status Code 400</a>
          </li>
          <li class="mb-3">
            <a href="#query23" class="text-blue-600 hover:text-blue-700">Status Code 401</a>
          </li>
          <li class="mb-3">
            <a href="#query24" class="text-blue-600 hover:text-blue-700">Status Code 402</a>
          </li>
          <li class="mb-3">
            <a href="#query25" class="text-blue-600 hover:text-blue-700">Status Code 403</a>
          </li>
          <li class="mb-3">
            <a href="#query26" class="text-blue-600 hover:text-blue-700">Status Code 404</a>
          </li>
          <li class="mb-3">
            <a href="#query27" class="text-blue-600 hover:text-blue-700">Status Code 405</a>
          </li>
          <li class="mb-3">
            <a href="#query28" class="text-blue-600 hover:text-blue-700">Status Code 406</a>
          </li>
          <li class="mb-3">
            <a href="#query29" class="text-blue-600 hover:text-blue-700">Status Code 407</a>
          </li>
          <li class="mb-3">
            <a href="#query30" class="text-blue-600 hover:text-blue-700">Status Code 408</a>
          </li>
          <li class="mb-3">
            <a href="#query31" class="text-blue-600 hover:text-blue-700">Status Code 409</a>
          </li>
          <li class="mb-3">
            <a href="#query32" class="text-blue-600 hover:text-blue-700">Status Code 410</a>
          </li>
          <li class="mb-3">
            <a href="#query33" class="text-blue-600 hover:text-blue-700">Status Code 411</a>
          </li>
          <li class="mb-3">
            <a href="#query34" class="text-blue-600 hover:text-blue-700">Status Code 412</a>
          </li>
          <li class="mb-3">
            <a href="#query35" class="text-blue-600 hover:text-blue-700">Status Code 413</a>
          </li>
          <li class="mb-3">
            <a href="#query36" class="text-blue-600 hover:text-blue-700">Status Code 414</a>
          </li>
          <li class="mb-3">
            <a href="#query37" class="text-blue-600 hover:text-blue-700">Status Code 415</a>
          </li>
          <li class="mb-3">
            <a href="#query38" class="text-blue-600 hover:text-blue-700">Status Code 416</a>
          </li>
          <li class="mb-3">
            <a href="#query39" class="text-blue-600 hover:text-blue-700">Status Code 417</a>
          </li>
          <li class="mb-3">
            <a href="#query40" class="text-blue-600 hover:text-blue-700">Status Code 418</a>
          </li>
          <li class="mb-3">
            <a href="#query41" class="text-blue-600 hover:text-blue-700">Status Code 421</a>
          </li>
          <li class="mb-3">
            <a href="#query42" class="text-blue-600 hover:text-blue-700">Status Code 422</a>
          </li>
          <li class="mb-3">
            <a href="#query43" class="text-blue-600 hover:text-blue-700">Status Code 423</a>
          </li>
          <li class="mb-3">
            <a href="#query44" class="text-blue-600 hover:text-blue-700">Status Code 424</a>
          </li>
          <li class="mb-3">
            <a href="#query45" class="text-blue-600 hover:text-blue-700">Status Code 426</a>
          </li>
          <li class="mb-3">
            <a href="#query46" class="text-blue-600 hover:text-blue-700">Status Code 428</a>
          </li>
          <li class="mb-3">
            <a href="#query47" class="text-blue-600 hover:text-blue-700">Status Code 429</a>
          </li>
          <li class="mb-3">
            <a href="#query48" class="text-blue-600 hover:text-blue-700">Status Code 431</a>
          </li>
          <li class="mb-3">
            <a href="#query49" class="text-blue-600 hover:text-blue-700">Status Code 444</a>
          </li>
          <li class="mb-3">
            <a href="#query50" class="text-blue-600 hover:text-blue-700">Status Code 451</a>
          </li>
          <li class="mb-3">
            <a href="#query51" class="text-blue-600 hover:text-blue-700">Status Code 499</a>
          </li>
          <li class="mb-3">
            <a href="#query52" class="text-blue-600 hover:text-blue-700">Status Code 500</a>
          </li>
          <li class="mb-3">
            <a href="#query53" class="text-blue-600 hover:text-blue-700">Status Code 501</a>
          </li>
          <li class="mb-3">
            <a href="#query54" class="text-blue-600 hover:text-blue-700">Status Code 502</a>
          </li>
          <li class="mb-3">
            <a href="#query55" class="text-blue-600 hover:text-blue-700">Status Code 503</a>
          </li>
          <li class="mb-3">
            <a href="#query56" class="text-blue-600 hover:text-blue-700">Status Code 504</a>
          </li>
          <li class="mb-3">
            <a href="#query57" class="text-blue-600 hover:text-blue-700">Status Code 505</a>
          </li>
          <li class="mb-3">
            <a href="#query58" class="text-blue-600 hover:text-blue-700">Status Code 506</a>
          </li>
          <li class="mb-3">
            <a href="#query59" class="text-blue-600 hover:text-blue-700">Status Code 507</a>
          </li>
          <li class="mb-3">
            <a href="#query60" class="text-blue-600 hover:text-blue-700">Status Code 508</a>
          </li>
          <li class="mb-3">
            <a href="#query61" class="text-blue-600 hover:text-blue-700">Status Code 510</a>
          </li>
          <li class="mb-3">
            <a href="#query62" class="text-blue-600 hover:text-blue-700">Status Code 511</a>
          </li>
          <li>
            <a href="#query63" class="text-blue-600 hover:text-blue-700">Status Code 599</a>
          </li>
        </ul>
      </div>
      <div class="md:w-9/12 bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-1">
        <h2 class="font-sans text-xl md:text-3xl text-gray-900 mb-2">HTTP Status Codes</h2>
        <p class="mb-6">Here you find a list of precompiled HTTP Server Requests. These examples are hand crafted and may not be a complete list of all servers are available. If you think there is a bug please feel free an report it.</p>
        <ul>
          <li id="query1" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">100 Continue</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:100')" target="_blank">/match/status:100</a>
              </div>
            </div>
          </li>
          <li id="query2" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">101 Switching Protocols</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:101')" target="_blank">/match/status:101</a>
              </div>
            </div>
          </li>
          <li id="query3" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">102 Processing</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:102')" target="_blank">/match/status:102</a>
              </div>
            </div>
          </li>
          <li id="query4" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">200 OK</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:200')" target="_blank">/match/status:200</a>
              </div>
            </div>
          </li>
          <li id="query5" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">201 Created</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:201')" target="_blank">/match/status:201</a>
              </div>
            </div>
          </li>
          <li id="query6" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">202 Accepted</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:202')" target="_blank">/match/status:202</a>
              </div>
            </div>
          </li>
          <li id="query7" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">203 Non-authoritative Information</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:203')" target="_blank">/match/status:203</a>
              </div>
            </div>
          </li>
          <li id="query8" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">204 No Content</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:204')" target="_blank">/match/status:204</a>
              </div>
            </div>
          </li>
          <li id="query9" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">205 Reset Content</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:205')" target="_blank">/match/status:205</a>
              </div>
            </div>
          </li>
          <li id="query10" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">206 Partial Content</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:206')" target="_blank">/match/status:206</a>
              </div>
            </div>
          </li>
          <li id="query11" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">207 Multi-Status</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:207')" target="_blank">/match/status:207</a>
              </div>
            </div>
          </li>
          <li id="query12" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">208 Already Reported</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:208')" target="_blank">/match/status:208</a>
              </div>
            </div>
          </li>
          <li id="query13" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">226 IM Used</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:226')" target="_blank">/match/status:226</a>
              </div>
            </div>
          </li>
          <li id="query14" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">300 Multiple Choices</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:300')" target="_blank">/match/status:300</a>
              </div>
            </div>
          </li>
          <li id="query15" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">301 Moved Permanently</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:301')" target="_blank">/match/status:301</a>
              </div>
            </div>
          </li>
          <li id="query16" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">302 Found</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:302')" target="_blank">/match/status:302</a>
              </div>
            </div>
          </li>
          <li id="query17" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">303 See Other</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:303')" target="_blank">/match/status:303</a>
              </div>
            </div>
          </li>
          <li id="query18" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">304 Not Modified</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:304')" target="_blank">/match/status:304</a>
              </div>
            </div>
          </li>
          <li id="query19" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">305 Use Proxy</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:305')" target="_blank">/match/status:305</a>
              </div>
            </div>
          </li>
          <li id="query20" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">307 Temporary Redirect</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:307')" target="_blank">/match/status:307</a>
              </div>
            </div>
          </li>
          <li id="query21" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">308 Permanent Redirect</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:308')" target="_blank">/match/status:308</a>
              </div>
            </div>
          </li>
          <li id="query22" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">400 Bad Request</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:400')" target="_blank">/match/status:400</a>
              </div>
            </div>
          </li>
          <li id="query23" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">401 Unauthorized</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:401')" target="_blank">/match/status:401</a>
              </div>
            </div>
          </li>
          <li id="query24" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">402 Payment Required</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:402')" target="_blank">/match/status:402</a>
              </div>
            </div>
          </li>
          <li id="query25" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">403 Forbidden</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:403')" target="_blank">/match/status:403</a>
              </div>
            </div>
          </li>
          <li id="query26" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">404 Not Found</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:404')" target="_blank">/match/status:404</a>
              </div>
            </div>
          </li>
          <li id="query27" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">405 Method Not Allowed</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:405')" target="_blank">/match/status:405</a>
              </div>
            </div>
          </li>
          <li id="query28" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">406 Not Acceptable</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:406')" target="_blank">/match/status:406</a>
              </div>
            </div>
          </li>
          <li id="query29" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">407 Proxy Authentication Required</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:407')" target="_blank">/match/status:407</a>
              </div>
            </div>
          </li>
          <li id="query30" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">408 Request Timeout</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:408')" target="_blank">/match/status:408</a>
              </div>
            </div>
          </li>
          <li id="query31" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">409 Conflict</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:409')" target="_blank">/match/status:409</a>
              </div>
            </div>
          </li>
          <li id="query32" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">410 Gone</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:410')" target="_blank">/match/status:410</a>
              </div>
            </div>
          </li>
          <li id="query33" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">411 Length Required</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:411')" target="_blank">/match/status:411</a>
              </div>
            </div>
          </li>
          <li id="query34" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">412 Precondition Failed</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:412')" target="_blank">/match/status:412</a>
              </div>
            </div>
          </li>
          <li id="query35" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">413 Payload Too Large</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:413')" target="_blank">/match/status:413</a>
              </div>
            </div>
          </li>
          <li id="query36" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">414 Request-URI Too Long</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:414')" target="_blank">/match/status:414</a>
              </div>
            </div>
          </li>
          <li id="query37" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">415 Unsupported Media Type</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:415')" target="_blank">/match/status:415</a>
              </div>
            </div>
          </li>
          <li id="query38" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">416 Requested Range Not Satisfiable</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:416')" target="_blank">/match/status:416</a>
              </div>
            </div>
          </li>
          <li id="query39" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">417 Expectation Failed</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:417')" target="_blank">/match/status:417</a>
              </div>
            </div>
          </li>
          <li id="query40" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">418 I'm a teapot</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:418')" target="_blank">/match/status:418</a>
              </div>
            </div>
          </li>
          <li id="query41" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">421 Misdirected Request</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:421')" target="_blank">/match/status:421</a>
              </div>
            </div>
          </li>
          <li id="query42" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">422 Unprocessable Entity</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:422')" target="_blank">/match/status:422</a>
              </div>
            </div>
          </li>
          <li id="query43" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">423 Locked</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:423')" target="_blank">/match/status:423</a>
              </div>
            </div>
          </li>
          <li id="query44" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">424 Failed Dependency</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:424')" target="_blank">/match/status:424</a>
              </div>
            </div>
          </li>
          <li id="query45" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">426 Upgrade Required</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:426')" target="_blank">/match/status:426</a>
              </div>
            </div>
          </li>
          <li id="query46" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">428 Precondition Required</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:428')" target="_blank">/match/status:428</a>
              </div>
            </div>
          </li>
          <li id="query47" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">429 Too Many Requests</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:429')" target="_blank">/match/status:429</a>
              </div>
            </div>
          </li>
          <li id="query48" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">431 Request Header Fields Too Large</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:431')" target="_blank">/match/status:431</a>
              </div>
            </div>
          </li>
          <li id="query49" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">444 Connection Closed Without Response</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:444')" target="_blank">/match/status:444</a>
              </div>
            </div>
          </li>
          <li id="query50" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">451 Unavailable For Legal Reasons</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:451')" target="_blank">/match/status:451</a>
              </div>
            </div>
          </li>
          <li id="query51" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">499 Client Closed Request</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:499')" target="_blank">/match/status:499</a>
              </div>
            </div>
          </li>
          <li id="query52" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">500 Internal Server Error</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:500')" target="_blank">/match/status:500</a>
              </div>
            </div>
          </li>
          <li id="query53" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">501 Not Implemented</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:501')" target="_blank">/match/status:501</a>
              </div>
            </div>
          </li>
          <li id="query54" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">502 Bad Gateway</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:502')" target="_blank">/match/status:502</a>
              </div>
            </div>
          </li>
          <li id="query55" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">503 Service Unavailable</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:503')" target="_blank">/match/status:503</a>
              </div>
            </div>
          </li>
          <li id="query56" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">504 Gateway Timeout</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:504')" target="_blank">/match/status:504</a>
              </div>
            </div>
          </li>
          <li id="query57" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">505 HTTP Version Not Supported</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:505')" target="_blank">/match/status:505</a>
              </div>
            </div>
          </li>
          <li id="query58" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">506 Variant Also Negotiates</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:506')" target="_blank">/match/status:506</a>
              </div>
            </div>
          </li>
          <li id="query59" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">507 Insufficient Storage</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:507')" target="_blank">/match/status:507</a>
              </div>
            </div>
          </li>
          <li id="query60" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">508 Loop Detected</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:508')" target="_blank">/match/status:508</a>
              </div>
            </div>
          </li>
          <li id="query61" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">510 Not Extended</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:510')" target="_blank">/match/status:510</a>
              </div>
            </div>
          </li>
          <li id="query62" class="mb-6">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">511 Network Authentication Required</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:511')" target="_blank">/match/status:511</a>
              </div>
            </div>
          </li>
          <li id="query63">
            <h4 class="font-thin text-base md:text-lg text-gray-900 mb-1">599 Network Connect Timeout Error</h4>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                <a v-bind:href="generateLink('/match/status:599')" target="_blank">/match/status:599</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <navfooter></navfooter>
</div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useNuxtApp } from '#app'

const { $env } = useNuxtApp()
const apiUrl = computed(() => $env?.API_URL || '#')

const generateLink = (path: string) => `${apiUrl.value}${path}`

useHead(() => ({
  title: 'Open source ASN lookup',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
    }
  ]
}))
</script>
