## Describe what happens when you type a URL into your browser and press Enter.

**Steps for what happens when we enter a URL :**

   * Browser checks cache for DNS entry to find the corresponding IP address of website.
   * It looks for following cache. If not found in one, then continues checking to the next until found.
       * Browser Cache
       * Operating Systems Cache
       * Router Cache
       * ISP Cache
   * If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
   * The requests are sent using small data packets that contain information content of request and IP address it is destined for.
   * Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
   * Browser sends an HTTP request to the web server. GET or POST request.
   * Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
   * Server sends out an HTTP response along with the status of response.
   * Browser displays HTML content
   * Finally, Done.

For [more detailed resource](https://github.com/alex/what-happens-when)