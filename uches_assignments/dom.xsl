<?xml version ="1.0" encoding="utf-8"?>
<x:stylesheet  version="1.0" xmlns:x="http://www.w3.org/1999/XSL/Transform">
<x:template match="/contact">
<html>
<head>
<title>this is converted html</title>
</head>

<body>

<x:for-each select="item">
<x:choose>
<x:when test="@type='first'">
<h1><x:value-of select="myname"/></h1>
<h1><x:value-of select="phone"/></h1>
<h1><x:value-of select="address"/></h1>
</x:when>


<x:when test="@type='second'">
<h1><x:value-of select="myname"/></h1>
<h1><x:value-of select="phone"/></h1>
<h1><x:value-of select="address"/></h1>
</x:when>

<x:when test="@type='third'">
<h1><x:value-of select="myname"/></h1>
<h1><x:value-of select="phone"/></h1>
<h1><x:value-of select="address"/></h1>
</x:when>



<x:when test="@type='fourth'">
<h1><x:value-of select="myname"/></h1>
<h1><x:value-of select="phone"/></h1>
<h1><x:value-of select="address"/></h1>
</x:when>


<x:when test="@type='fifth'">
<h1><x:value-of select="myname"/></h1>
<h1><x:value-of select="phone"/></h1>
<h1><x:value-of select="address"/></h1>
</x:when>

<x:when test="@type='sixth'">
<h1><x:value-of select="myname"/></h1>
<h1><x:value-of select="phone"/></h1>
<h1><x:value-of select="address"/></h1>
</x:when>
<x:otherwise>
<h1>this is no there</h1>
</x:otherwise>
</x:choose>
</x:for-each>

</body>
</html>
</x:template>
</x:stylesheet>