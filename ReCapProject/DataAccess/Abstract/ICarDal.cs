﻿using Core.DataAccess;
using Core.DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTO_s;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Abstract
{
    public interface ICarDal : IEntityRepository<Car>
    {
        // Join, select, from...

        List<CarDetailDto> GetCarDetails(Expression<Func<CarDetailDto, bool>> filter = null);
        CarDetailDto GetCarDetail(Expression<Func<CarDetailDto, bool>> filter = null);


    }
}
