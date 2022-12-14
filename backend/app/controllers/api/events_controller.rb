require 'digest/md5'

class Api::EventsController < ApiController
    # validation
    def shorten
      originalUrl = params[:originalUrl];
      uniqueHash = generateUniqueHash(originalUrl);
      saveUrl(uniqueHash, originalUrl);

      shortenUrl = 'http://localhost:3001/api/' + uniqueHash;
      render :json => {url: shortenUrl};
    end

    def show
      uniqueHash = params[:uniqueHash];
      originalUrl = getOriginalUrl(uniqueHash)
      redirect_to originalUrl, allow_other_host: true
    end

    # more short
    def generateUniqueHash(originalUrl)
      return Digest::MD5.hexdigest(originalUrl)
    end

    # nosql unique performance
    def saveUrl(uniqueHash, originalUrl)
      Url.create({
        unique_hash: uniqueHash,
        original_url: originalUrl
      })
    end

    def getOriginalUrl(uniqueHash)
      return Url.where(unique_hash: uniqueHash)[0]['original_url']
    end
    
    # testable?
end
