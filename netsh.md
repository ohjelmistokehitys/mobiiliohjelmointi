# Using `netsh` to forward ports

`netsh` is a Windows command-line utility that allows you to configure network settings, including port forwarding. This can be useful for forwarding traffic from one port to another, especially when working with development servers or applications that need to be accessed from different network interfaces.

In an Expo project running in a development container or a codespace, you may need to forward a port or use a tunnel to access the development server from your phone or other external devices. The following commands demonstrate how to use `netsh` to forward ports on a Windows machine. They are experimental and may expose your machine to security risks, so we recommend using other methods when possible.

The `nets` commands require running in an **Administrator PowerShell**.

**Add a port proxy:**

```powershell
netsh interface portproxy add v4tov4 listenaddress=10.202.245.176 listenport=8081 connectaddress=127.0.0.1 connectport=8081
```

Forwards connections from the LAN IP and port to the local VS Code-forwarded port.

**Show all port proxies:**

```powershell
netsh interface portproxy show all
```

Lists all configured port proxies.

**Delete a port proxy:**

```powershell
netsh interface portproxy delete v4tov4 listenaddress=10.202.245.176 listenport=8081
```

Removes the specified port proxy.

**Run expo with the LAN ip as hostname:**

In a container or codespace, the LAN IP is not automatically detected, so you need to set the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable to your LAN IP when starting the Expo server. This allows your phone or other devices on the same network to connect to the development server using the provided QR code.

```powershell
REACT_NATIVE_PACKAGER_HOSTNAME=10.202.245.176 npx expo start
```
