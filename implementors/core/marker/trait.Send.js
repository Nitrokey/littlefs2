(function() {var implementors = {};
implementors["littlefs2"] = [{"text":"impl&lt;Storage&gt; !Send for Allocation&lt;Storage&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Storage&gt; !Send for Filesystem&lt;'a, Storage&gt;","synthetic":true,"types":[]},{"text":"impl Send for FileType","synthetic":true,"types":[]},{"text":"impl Send for Metadata","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Attribute&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Storage&gt;::ATTRBYTES_MAX: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Send for FileAllocation&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; !Send for File&lt;'a, 'b, S&gt;","synthetic":true,"types":[]},{"text":"impl Send for OpenOptions","synthetic":true,"types":[]},{"text":"impl Send for DirEntry","synthetic":true,"types":[]},{"text":"impl !Send for ReadDirAllocation","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; !Send for ReadDir&lt;'a, 'b, S&gt;","synthetic":true,"types":[]},{"text":"impl Send for SeekFrom","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Path","synthetic":true,"types":[]},{"text":"impl Send for PathBuf","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()