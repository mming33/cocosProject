System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./Floor.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, Vec3, _decorator, MyComponent, Floor, FloorType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FloorManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloor(extras) {
    _reporterNs.report("Floor", "./Floor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_FloorJs) {
      Floor = _FloorJs.Floor;
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05d54UF3sRLvYPRcXaYLvPz", "FloorMananger", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FloorManager", FloorManager = (_dec = ccclass('FloorManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = class FloorManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "floorPrefabs", _descriptor, this);

          _initializerDefineProperty(this, "Camera", _descriptor2, this);

          _initializerDefineProperty(this, "Player", _descriptor3, this);

          _defineProperty(this, "allFloors", []);

          _defineProperty(this, "type", "level");

          _defineProperty(this, "randomIndex", 0);

          _defineProperty(this, "lastNode", null);

          _defineProperty(this, "lastFloorType", (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
            error: Error()
          }), FloorType) : FloorType).FRONT);

          _defineProperty(this, "frontNumber", 0);

          _defineProperty(this, "movespeed", 5);

          _defineProperty(this, "moveSpeedx", 0);

          _defineProperty(this, "moveSpeedz", 0);

          _defineProperty(this, "nowFloorIndex", 0);

          _defineProperty(this, "cameraAngle", 0);
        }

        onLoad() {
          FloorManager.I = this.node.getComponent(FloorManager);
        }

        Init() {// this.CreateFloorForJson(this.data);
        }

        CreateFloor(FloorID) {
          for (let i = 0; i < this.floorPrefabs.length; i++) {
            const element = this.floorPrefabs[i].data.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);

            if (element.ID == FloorID) {
              let floor = instantiate(this.floorPrefabs[i]);
              this.allFloors.push(floor.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
                error: Error()
              }), Floor) : Floor));
              return floor;
            }
          }

          console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
          return null;
        }

        CreateFloorForJson(json) {
          // json = this.data;
          let node = this.node;

          for (let i = 0; i < json.floorData.length; i++) {
            const element = json.floorData[i];
            const id = Number(element) + 10000;
            let floorNode = this.CreateFloor(id);

            if (floorNode) {
              let type = this.SetNewFloorTypeData(floorNode, json, i);

              if (i == 0) {
                floorNode.setWorldPosition(0, 0, 0);
                this.lastNode = floorNode;
              } else {
                this.SetFloorNodePosition(type, floorNode);
              }

              node.addChild(floorNode);
            }
          }
        }

        CreateFloorForRandom() {
          // json = this.data;
          let node = this.node;
          let floorNode;
          let floor = {
            floorType: (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT
          };

          if (this.randomIndex <= 5) {
            const id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);
            floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT;
          } else {
            const id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);

            if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                if (Math.random() < 0.5) floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;else floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
              } else {
                this.frontNumber++;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              }
            } else if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT || this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              } else {
                this.frontNumber++;
                floor.floorType = this.lastFloorType;
              }
            }
          }

          if (floorNode) {
            let f = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);
            f.floorType = floor.floorType;
            this.lastFloorType = floor.floorType;

            if (this.randomIndex == 0) {
              floorNode.setWorldPosition(0, 0, 0);
              this.lastNode = floorNode;
            } else {
              this.SetFloorNodePosition(floor.floorType, floorNode);
            }

            node.addChild(floorNode);
            this.randomIndex++;
          }
        }

        SetFloorNodePosition(type, floorNode) {
          if (!this.lastNode) return;

          switch (type) {
            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z - 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).BACK:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z + 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x - 3, 0, this.lastNode.worldPosition.z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x + 3, 0, this.lastNode.worldPosition.z);
              break;

            default:
              break;
          }

          this.lastNode = floorNode;
        }
        /**创建时根据json数据设置新地板的方向属性 */


        SetNewFloorTypeData(floorNode, json, i) {
          let floor = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
            error: Error()
          }), Floor) : Floor);

          if (floor) {
            switch (json.floorDirectionData[i]) {
              case '1':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
                break;

              case '2':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK;
                break;

              case '3':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;
                break;

              case '4':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
                break;

              default:
                throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
            }

            return floor.floorType;
          }

          throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
        }

        onUpDate(dt) {
          this.MoveFloor(dt);
        }

        MoveFloor(dt) {
          var _this$Camera, _this$Camera2, _this$Player;

          if (!this.allFloors[this.nowFloorIndex]) return;

          if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            if (this.type == "endlessMode") {
              if (this.nowFloorIndex == 5) this.RemoveFloor();else {
                this.nowFloorIndex++;
              } // if (this.nowFloorIndex > 2) {
              // this.nowFloorIndex = 2;
              // }

              this.CreateFloorForRandom();
            } else {
              this.nowFloorIndex++;
            } // if (this.nowFloorIndex == 1)
            // this.nowFloorIndex--;

          } //若下个结点存在 并且与当前结点的类型不同


          if (this.allFloors[this.nowFloorIndex] && this.allFloors[this.nowFloorIndex + 1]) {
            if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
              //应该转向
              if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
                switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).FRONT:
                    this.MoveFront();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).BACK:
                    this.MoveBack();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).LEFT:
                    this.MoveLeft();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).RIGHT:
                    this.MoveRight();
                    break;

                  default:
                    this.MoveStop();
                    break;
                }
              }
            } //转摄像头


            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).FRONT:
                this.cameraAngle = 0;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).BACK:
                this.cameraAngle = 180;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).LEFT:
                this.cameraAngle = 90;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).RIGHT:
                this.cameraAngle = -90;
                break;
            }
          }

          let out = new Vec3(0, 0, 0);
          let angle = new Vec3(0, 0, 0);
          (_this$Camera = this.Camera) === null || _this$Camera === void 0 ? void 0 : _this$Camera.getWorldRotation().getEulerAngles(angle);
          Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1);
          (_this$Camera2 = this.Camera) === null || _this$Camera2 === void 0 ? void 0 : _this$Camera2.setRotationFromEuler(out.x, out.y, out.z);
          (_this$Player = this.Player) === null || _this$Player === void 0 ? void 0 : _this$Player.setRotationFromEuler(out.x, out.y, out.z);

          for (let i = 0; i < this.allFloors.length; i++) {
            const element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + this.moveSpeedx * this.movespeed * dt, 0, element.node.worldPosition.z + this.moveSpeedz * this.movespeed * dt);
          }
        }

        RemoveFloor() {
          this.allFloors[0].node.destroy();
          this.allFloors.splice(0, 1);
        }

        startMove() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        }

        MoveFront() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        }

        MoveBack() {
          this.moveSpeedx = 0;
          this.moveSpeedz = -1;
        }

        MoveLeft() {
          this.moveSpeedx = 1;
          this.moveSpeedz = 0;
        }

        MoveRight() {
          this.moveSpeedx = -1;
          this.moveSpeedz = 0;
        }

        MoveStop() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 0;
        }

      }, _defineProperty(_class3, "I", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floorPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTm9kZSIsIlByZWZhYiIsIlZlYzMiLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJGbG9vciIsIkZsb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZsb29yTWFuYWdlciIsIkZST05UIiwib25Mb2FkIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJJbml0IiwiQ3JlYXRlRmxvb3IiLCJGbG9vcklEIiwiaSIsImZsb29yUHJlZmFicyIsImxlbmd0aCIsImVsZW1lbnQiLCJkYXRhIiwiSUQiLCJmbG9vciIsImFsbEZsb29ycyIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJDcmVhdGVGbG9vckZvckpzb24iLCJqc29uIiwiZmxvb3JEYXRhIiwiaWQiLCJOdW1iZXIiLCJmbG9vck5vZGUiLCJ0eXBlIiwiU2V0TmV3Rmxvb3JUeXBlRGF0YSIsInNldFdvcmxkUG9zaXRpb24iLCJsYXN0Tm9kZSIsIlNldEZsb29yTm9kZVBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJDcmVhdGVGbG9vckZvclJhbmRvbSIsImZsb29yVHlwZSIsInJhbmRvbUluZGV4IiwibGFzdEZsb29yVHlwZSIsImZyb250TnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsIkxFRlQiLCJSSUdIVCIsImYiLCJ3b3JsZFBvc2l0aW9uIiwieCIsInoiLCJCQUNLIiwiZmxvb3JEaXJlY3Rpb25EYXRhIiwiRXJyb3IiLCJMZXZlbDEiLCJvblVwRGF0ZSIsImR0IiwiTW92ZUZsb29yIiwibm93Rmxvb3JJbmRleCIsIklzTm93Rmxvb3IiLCJSZW1vdmVGbG9vciIsImRpc3RhbmNlIiwiTW92ZUZyb250IiwiTW92ZUJhY2siLCJNb3ZlTGVmdCIsIk1vdmVSaWdodCIsIk1vdmVTdG9wIiwiY2FtZXJhQW5nbGUiLCJvdXQiLCJhbmdsZSIsIkNhbWVyYSIsImdldFdvcmxkUm90YXRpb24iLCJnZXRFdWxlckFuZ2xlcyIsImxlcnAiLCJzZXRSb3RhdGlvbkZyb21FdWxlciIsInkiLCJQbGF5ZXIiLCJtb3ZlU3BlZWR4IiwibW92ZXNwZWVkIiwibW92ZVNwZWVkeiIsImRlc3Ryb3kiLCJzcGxpY2UiLCJzdGFydE1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDQSxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBdUNDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxVLE9BQUFBLFU7O0FBRS9GQyxNQUFBQSxXLDRCQUFBQSxXOztBQUdBQyxNQUFBQSxLLFlBQUFBLEs7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7Ozs7T0FFSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkwsVTs7OEJBR2pCTSxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsVUFJSEMsUUFBUSxDQUFDUCxNQUFELEMsVUFFUk8sUUFBUSxDQUFDUixJQUFELEMsVUFFUlEsUUFBUSxDQUFDUixJQUFELEMsOENBUmIsTUFDYVMsWUFEYjtBQUFBO0FBQUEsc0NBQzhDO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2Q0FVckIsRUFWcUI7O0FBQUEsd0NBWTNCLE9BWjJCOztBQUFBLCtDQWNwQixDQWRvQjs7QUFBQSw0Q0FnQmxCLElBaEJrQjs7QUFBQSxpREFrQjFCO0FBQUE7QUFBQSxzQ0FBVUMsS0FsQmdCOztBQUFBLCtDQW9CcEIsQ0FwQm9COztBQUFBLDZDQXNCdEIsQ0F0QnNCOztBQUFBLDhDQXdCckIsQ0F4QnFCOztBQUFBLDhDQTBCckIsQ0ExQnFCOztBQUFBLGlEQTRCbEIsQ0E1QmtCOztBQUFBLCtDQThCcEIsQ0E5Qm9CO0FB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LElBQVIsQ0FBYXNDLGFBQWIsQ0FBMkJFLENBQTNCLEdBQWdDLEtBQUs2QixVQUFMLEdBQWtCLEtBQUtELFNBQXZCLEdBQW1DdEIsRUFBNUs7QUFDSDtBQUNKOztBQUVESSxRQUFBQSxXQUFXLEdBQUc7QUFDVixlQUFLdEMsU0FBTCxDQUFlLENBQWYsRUFBa0JaLElBQWxCLENBQXVCc0UsT0FBdkI7QUFDQSxlQUFLMUQsU0FBTCxDQUFlMkQsTUFBZixDQUFzQixDQUF0QixFQUF5QixDQUF6QjtBQUNIOztBQUNEQyxRQUFBQSxTQUFTLEdBQUc7QUFDUixlQUFLTCxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNIOztBQUNEakIsUUFBQUEsU0FBUyxHQUFHO0FBQ1IsZUFBS2UsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFDRGhCLFFBQUFBLFFBQVEsR0FBRztBQUNQLGVBQUtjLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQUMsQ0FBbkI7QUFDSDs7QUFDRGYsUUFBQUEsUUFBUSxHQUFHO0FBQ1AsZUFBS2EsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFDRGQsUUFBQUEsU0FBUyxHQUFHO0FBQ1IsZUFBS1ksVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNIOztBQUNEYixRQUFBQSxRQUFRLEdBQUc7QUFDUCxlQUFLVyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNIOztBQS9ReUMsTzs7Ozs7aUJBSWpCLEU7Ozs7Ozs7aUJBRUgsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0NDbGFzcywgZGlyZWN0b3IsIEVudW0sIGluc3RhbnRpYXRlLCBtYXRoLCBOb2RlLCBQcmVmYWIsIFF1YXQsIFN5c3RlbSwgc3lzdGVtRXZlbnQsIHYzLCBWZWMzLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBERUJVRywgRURJVE9SIH0gZnJvbSBcImNjZS5lbnZcIjtcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb29yIH0gZnJvbSBcIi4vRG9vclwiO1xuaW1wb3J0IHsgRG9vclR5cGUgfSBmcm9tIFwiLi9Eb29yVHlwZVwiO1xuaW1wb3J0IHsgRmxvb3IgfSBmcm9tIFwiLi9GbG9vclwiO1xuaW1wb3J0IHsgRmxvb3JUeXBlIH0gZnJvbSBcIi4vRmxvb3JUeXBlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdGbG9vck1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIEZsb29yTWFuYWdlciBleHRlbmRzIE15Q29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBJOiBGbG9vck1hbmFnZXI7XG4gICAgQHByb3BlcnR5KFByZWZhYilcbiAgICBmbG9vclByZWZhYnM6IFByZWZhYltdID0gW107XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgQ2FtZXJhOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgUGxheWVyOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgLyoq5omA5pyJ55qE5Zyw5p2/ICovXG4gICAgYWxsRmxvb3JzOiBGbG9vcltdID0gW107XG4gICAgLyoq5ri45oiP5qih5byPICovXG4gICAgdHlwZTogc3RyaW5nID0gXCJsZXZlbFwiO1xuICAgIC8qKumaj+acuuWcsOadv+S4quaVsOaooeW8jyAqL1xuICAgIHJhbmRvbUluZGV4OiBudW1iZXIgPSAwO1xuICAgIC8qKuS4iuS4gOS4quWcsOadvyAqL1xuICAgIGxhc3ROb2RlOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgLyoq5LiK5LiA5Liq5Zyw5p2/IOaWueWQkeexu+WeiyovXG4gICAgbGFzdEZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAvKirlkIzmlrnlkJHnsbvlnovnmoTlnLDmnb/kuKrmlbAqL1xuICAgIGZyb250TnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIC8qKuenu+WKqOmAn+W6piovXG4gICAgbW92ZXNwZWVkOiBudW1iZXIgPSA1O1xuICAgIC8qKnjmlrnlkJEqL1xuICAgIG1vdmVTcGVlZHg6IG51bWJlciA9IDA7XG4gICAgLyoqeuaWueWQkSovXG4gICAgbW92ZVNwZWVkejogbnVtYmVyID0gMDtcbiAgICAvKirlvZPliY3lnLDmnb/ntKLlvJUqL1xuICAgIG5vd0Zsb29ySW5kZXg6IG51bWJlciA9IDA7XG4gICAgLyoq5pGE5YOP5py66KeS5bqmKi9cbiAgICBjYW1lcmFBbmdsZTogbnVtYmVyID0gMDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgRmxvb3JNYW5hZ2VyLkkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEZsb29yTWFuYWdlcikgYXMgRmxvb3JNYW5hZ2VyO1xuICAgIH1cbiAgICBJbml0KCkge1xuXG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlRmxvb3JGb3JKc29uKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgQ3JlYXRlRmxvb3IoRmxvb3JJRDogbnVtYmVyKTogTm9kZSB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmxvb3JQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKHRoaXMuZmxvb3JQcmVmYWJzW2ldLmRhdGEgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcjtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LklEID09IEZsb29ySUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBpbnN0YW50aWF0ZSh0aGlzLmZsb29yUHJlZmFic1tpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxGbG9vcnMucHVzaChmbG9vci5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxvb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIuWIm+W7uuWcsOadv+Wksei0pSzkuI3lrZjlnKhJROS4ujpcIiwgRmxvb3JJRCwgXCLnmoTlnLDmnb8s6K+35qOA5p+l5ZCO6YeN6K+VIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgQ3JlYXRlRmxvb3JGb3JKc29uKGpzb246IGFueSkge1xuICAgICAgICAvLyBqc29uID0gdGhpcy5kYXRhO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmZsb29yRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpzb24uZmxvb3JEYXRhW2ldO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoZWxlbWVudCkgKyAxMDAwMDtcbiAgICAgICAgICAgIGxldCBmbG9vck5vZGUgPSB0aGlzLkNyZWF0ZUZsb29yKGlkKTtcbiAgICAgICAgICAgIGlmIChmbG9vck5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuU2V0TmV3Rmxvb3JUeXBlRGF0YShmbG9vck5vZGUsIGpzb24sIGkpO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBmbG9vck5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRGbG9vck5vZGVQb3NpdGlvbih0eXBlLCBmbG9vck5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmFkZENoaWxkKGZsb29yTm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZUZsb29yRm9yUmFuZG9tKCkge1xuICAgICAgICAvLyBqc29uID0gdGhpcy5kYXRhO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgbGV0IGZsb29yTm9kZTtcbiAgICAgICAgbGV0IGZsb29yID0geyBmbG9vclR5cGU6IEZsb29yVHlwZS5GUk9OVCB9O1xuICAgICAgICBpZiAodGhpcy5yYW5kb21JbmRleCA8PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigxKSArIDEwMDAwO1xuICAgICAgICAgICAgZmxvb3JOb2RlID0gdGhpcy5DcmVhdGVGbG9vcihpZCk7XG4gICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigxKSArIDEwMDAwO1xuICAgICAgICAgICAgZmxvb3JOb2RlID0gdGhpcy5DcmVhdGVGbG9vcihpZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0Rmxvb3JUeXBlID09IEZsb29yVHlwZS5GUk9OVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyb250TnVtYmVyID49IDUgJiYgTWF0aC5yYW5kb20oKSA8IDAuMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb250TnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuTEVGVDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLlJJR0hUO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbnROdW1iZXIrKztcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0Rmxvb3JUeXBlID09IEZsb29yVHlwZS5MRUZUIHx8IHRoaXMubGFzdEZsb29yVHlwZSA9PSBGbG9vclR5cGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcm9udE51bWJlciA+PSA1ICYmIE1hdGgucmFuZG9tKCkgPCAwLjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm9udE51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb250TnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IHRoaXMubGFzdEZsb29yVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxvb3JOb2RlKSB7XG4gICAgICAgICAgICBsZXQgZiA9IGZsb29yTm9kZS5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yO1xuICAgICAgICAgICAgZi5mbG9vclR5cGUgPSBmbG9vci5mbG9vclR5cGU7XG4gICAgICAgICAgICB0aGlzLmxhc3RGbG9vclR5cGUgPSBmbG9vci5mbG9vclR5cGU7XG4gICAgICAgICAgICBpZiAodGhpcy5yYW5kb21JbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IGZsb29yTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRGbG9vck5vZGVQb3NpdGlvbihmbG9vci5mbG9vclR5cGUsIGZsb29yTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLmFkZENoaWxkKGZsb29yTm9kZSk7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbUluZGV4Kys7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgU2V0Rmxvb3JOb2RlUG9zaXRpb24odHlwZTogRmxvb3JUeXBlLCBmbG9vck5vZGU6IE5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3ROb2RlKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuRlJPTlQ6XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24odGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLngsIDAsIHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi56IC0gMyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5CQUNLOlxuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi54LCAwLCB0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueiArIDMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueCAtIDMsIDAsIHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi56KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLlJJR0hUOlxuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi54ICsgMywgMCwgdGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3ROb2RlID0gZmxvb3JOb2RlO1xuICAgIH1cblxuICAgIC8qKuWIm+W7uuaXtuagueaNrmpzb27mlbDmja7orr7nva7mlrDlnLDmnb/nmoTmlrnlkJHlsZ7mgKcgKi9cbiAgICBwcml2YXRlIFNldE5ld0Zsb29yVHlwZURhdGEoZmxvb3JOb2RlOiBOb2RlLCBqc29uOiBhbnksIGk6IG51bWJlcik6IEZsb29yVHlwZSB7XG4gICAgICAgIGxldCBmbG9vciA9IGZsb29yTm9kZS5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yO1xuICAgICAgICBpZiAoZmxvb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoanNvbi5mbG9vckRpcmVjdGlvbkRhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkJBQ0s7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuTEVGVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5SSUdIVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw57G75Z6LOlwiICsganNvbi5MZXZlbDEuZmxvb3JEaXJlY3Rpb25EYXRhW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZsb29yLmZsb29yVHlwZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDnsbvlnos6XCIgKyBqc29uLkxldmVsMS5mbG9vckRpcmVjdGlvbkRhdGFbaV0pXG4gICAgfVxuICAgIG9uVXBEYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5Nb3ZlRmxvb3IoZHQpO1xuICAgIH1cbiAgICBNb3ZlRmxvb3IoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0pIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLklzTm93Rmxvb3IoKSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZW5kbGVzc01vZGVcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0Zsb29ySW5kZXggPT0gNSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW1vdmVGbG9vcigpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd0Zsb29ySW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMubm93Rmxvb3JJbmRleCA+IDIpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vd0Zsb29ySW5kZXggPSAyO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZUZsb29yRm9yUmFuZG9tKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm93Rmxvb3JJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm93Rmxvb3JJbmRleCA9PSAxKVxuXG4gICAgICAgICAgICAvLyB0aGlzLm5vd0Zsb29ySW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICAvL+iLpeS4i+S4que7k+eCueWtmOWcqCDlubbkuJTkuI7lvZPliY3nu5PngrnnmoTnsbvlnovkuI3lkIxcbiAgICAgICAgaWYgKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0gJiYgdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vd0Zsb29ySW5kZXggKyAxIDwgdGhpcy5hbGxGbG9vcnMubGVuZ3RoICYmIHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSAhPSB0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgIC8v5bqU6K+l6L2s5ZCRXG4gICAgICAgICAgICAgICAgaWYgKFZlYzMuZGlzdGFuY2UodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XS5ub2RlLndvcmxkUG9zaXRpb24sIG5ldyBWZWMzKDAsIDAsIDApKSA8IDAuMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuRlJPTlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3ZlRnJvbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3ZlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVTdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+i9rOaRhOWDj+WktFxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXS5mbG9vclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSAxODA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSA5MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSAtOTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBvdXQgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgbGV0IGFuZ2xlID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuQ2FtZXJhPy5nZXRXb3JsZFJvdGF0aW9uKCkuZ2V0RXVsZXJBbmdsZXMoYW5nbGUpXG4gICAgICAgIFZlYzMubGVycChvdXQsIGFuZ2xlLCBuZXcgVmVjMygwLCB0aGlzLmNhbWVyYUFuZ2xlLCAwKSwgMC4xKTtcbiAgICAgICAgdGhpcy5DYW1lcmE/LnNldFJvdGF0aW9uRnJvbUV1bGVyKG91dC54LCBvdXQueSwgb3V0LnopO1xuICAgICAgICB0aGlzLlBsYXllcj8uc2V0Um90YXRpb25Gcm9tRXVsZXIob3V0LngsIG91dC55LCBvdXQueik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxGbG9vcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmFsbEZsb29yc1tpXTtcbiAgICAgICAgICAgIGVsZW1lbnQubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVsZW1lbnQubm9kZS53b3JsZFBvc2l0aW9uLnggKyAodGhpcy5tb3ZlU3BlZWR4ICogdGhpcy5tb3Zlc3BlZWQgKiBkdCksIDAsIGVsZW1lbnQubm9kZS53b3JsZFBvc2l0aW9uLnogKyAodGhpcy5tb3ZlU3BlZWR6ICogdGhpcy5tb3Zlc3BlZWQgKiBkdCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUmVtb3ZlRmxvb3IoKSB7XG4gICAgICAgIHRoaXMuYWxsRmxvb3JzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmFsbEZsb29ycy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIHN0YXJ0TW92ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMTtcbiAgICB9XG4gICAgTW92ZUZyb250KCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAxO1xuICAgIH1cbiAgICBNb3ZlQmFjaygpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gLTE7XG4gICAgfVxuICAgIE1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAxO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAwO1xuICAgIH1cbiAgICBNb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IC0xO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAwO1xuICAgIH1cbiAgICBNb3ZlU3RvcCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMDtcbiAgICB9XG59Il19