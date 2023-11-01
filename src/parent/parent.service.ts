import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Parent } from './type';
import { ChildService } from 'src/child/child.service';


@Injectable()
export class ParentService {
  private parent: Parent[] = [];
    
  
  constructor(
    private readonly childService: ChildService,
  ) {}

  insertParent(
    firstname: string,
    lastname: string,
    childId: string,
  ): string {
    const parentId = uuidv4();
    this.parent.push(new Parent (parentId, firstname, lastname, childId),
    );
    return parentId;
  }


  getParent(): Parent[] {
    return this.parent; 
  }
  
  getSingleParent(parentId: string): Parent{ 
    const [parent] = this.findParent(parentId);
    return parent;
  }

  updateParent(
    parentId: string, 
    firstname: string, 
    lastname: string, 
    childId: string,
    ): Parent{
    const [parent, index] = this.findParent(parentId);
  
    if (firstname) {
      parent.firstname = firstname;
    }
    if (lastname) {
      parent.lastname = lastname
    }
    if (childId) {
      parent.childId = childId;
    }
  
    return parent;
  }
  

  deleteParent(parentId: string) {
    const [parent, index] = this.findParent(parentId);
    this.parent.splice(index, 1);
    return { message: 'Uspjesno obrisano' };
  }


  findParent(id: string): [Parent, number] {
    const parentIndex = this.parent.findIndex( (parent) => parent.id === id,);
    if (parentIndex === -1) {
      throw new NotFoundException(`Parent with ID ${id} not found`);
    }
    return [this.parent[parentIndex], parentIndex];
  }
}
