using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Expenses.core.DataLayer.DbModels;


namespace Expenses.data.entityframework.Mapping
{
   public class EntityMapper : IEntityMapper
    {
        // collection of     [Export(typeof(IEntityMap))]
        //that MapEntities() builds models

        public IEnumerable<IEntity> Mappings { get; set; }

        public EntityMapper()
        {
        }


        public void MapEntities(ModelBuilder modelBuilder)
        {
            //foreach (var item in Mappings) { item.Map(modelBuilder); }
            foreach (var item in Mappings)
            {
                Type type = item.GetType();
                modelBuilder.Entity(type);
            }

        }
    }
}
