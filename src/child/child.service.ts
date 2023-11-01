import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Child } from './type';
import { ParentService } from 'src/parent/parent.service';


@Injectable()
export class ChildService {
  private child: Child[] = [];
  childIndex: number;

  insertChild(
    firstname: string,
    lastname: string,
    parentId: string,
  ): string {
    const childId = uuidv4();
    this.child.push(new Child(childId, firstname, lastname, parentId)
    );
    return childId;
  }

  getChild(): Child[] {
    return this.child;
  }

  getSingleChild(childId: string): Child {
    const [child] = this.findChild(childId);
    return child;
  }

  updateChild(
    childId: string,
    firstname: string,
    lastname: string,
    parentId: string,
  ): Child{
    const [child, index] = this.findChild(childId);

    if (firstname) {
      child.firstname = firstname;
    }
    if (lastname) {
      child.lastname = lastname;

    }
    if (parentId) {
      child.parentId = parentId;
    }

    return child;
  }

  deleteChild(childId: string) {
    const [child, index] = this.findChild(childId);
    this.child.splice(index, 1);
    return { message: 'Uspjesno obrisano' };
  }


  findChild(id: string): [Child, number] {
    const childIndex = this.child.findIndex((child) => child.id === id);
    if (childIndex === -1) {
      throw new NotFoundException(`Child with ID ${id} not found`);
    }
    return [this.child[this.childIndex],this.childIndex];
  }
}
