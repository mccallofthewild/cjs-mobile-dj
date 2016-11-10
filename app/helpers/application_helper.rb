module ApplicationHelper
    def gfont(fonts)
        return "<link href='https://fonts.googleapis.com/css?family=#{fonts.join('|')}' rel='stylesheet'>"
    end
end
