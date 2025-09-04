Jekyll::Hooks.register :site, :post_write do |site|
  # Post-process all HTML files to convert XHTML-style void elements to HTML5
  html_files = Dir.glob(File.join(site.dest, '**', '*.html'))
  
  html_files.each do |file|
    content = File.read(file)
    modified = false
    
    # Convert XHTML-style void elements to HTML5 format
    # List of void elements that should not have closing tags
    void_elements = %w[area base br col embed hr img input link meta source track wbr]
    
    void_elements.each do |element|
      # Replace self-closing tags with HTML5 format
      # Pattern: <element attributes/>
      pattern = /<(#{element})\s([^>]*?)\s*\/>/i
      if content.match?(pattern)
        content.gsub!(pattern, '<\1 \2>')
        modified = true
      end
      
      # Also handle cases without attributes: <element/>
      pattern = /<(#{element})\s*\/>/i
      if content.match?(pattern)
        content.gsub!(pattern, '<\1>')
        modified = true
      end
    end
    
    # Clean up any extra spaces before closing brackets
    if content.gsub!(/\s+>/, '>')
      modified = true
    end
    
    # Write back to file if modifications were made
    if modified
      File.write(file, content)
    end
  end
end
