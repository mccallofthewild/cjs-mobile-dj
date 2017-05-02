module ApplicationHelper
    def gfont(fonts)
        return "<link href='https://fonts.googleapis.com/css?family=#{fonts.join('|')}' rel='stylesheet'>"
    end
    def description
        return "At CJ's Mobile DJ, we are passionate about making music into memories."
    end
end
