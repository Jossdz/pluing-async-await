exports.catchError = function catchError(fn){
    return function(req,res,next){
      return fn(req,res).catch(next)
    }
  }
